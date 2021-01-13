const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const token = process.env.TOKEN;

bot.commands = new Discord.Collection();

// command files
const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

// registers commands

commandFiles.forEach((file) => {
    var command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
});

const prefix = "bonk";

bot.on("message", (msg) => {
    //if our message doesnt start with our defined prefix, dont go any further into function
    var tokens = msg.content.split(" ");
    if (tokens[0].toLowerCase() != prefix) {
        return;
    }

    if (tokens.length > 1) {
        if (tokens.length == 2 && !bot.commands.has(tokens[1].toLowerCase())) {
            // execute default command
            var target = tokens[1].toLowerCase();
            bot.commands.get("bonk").execute(msg, target);
        } else {
            var secondaryCommand = tokens[1].toLowerCase();
            if (!bot.commands.has(secondaryCommand)) {
                msg.channel.send("i don't understand :-:");
            } else {
                if (tokens.length == 3) {
                    var target = tokens[2].toLowerCase();
                    // execute secondary command
                    bot.commands.get(secondaryCommand).execute(msg, target);
                } else {
                    msg.channel.send(`i can't perform ${secondaryCommand} -_-`);
                }
            }
        }
        // check
    } else {
        msg.channel.send("no person to bonk :-:");
    }
});

bot.login(token);

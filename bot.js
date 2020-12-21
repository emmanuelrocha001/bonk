const Discord = require("discord.js");
const bot = new Discord.Client();
const token = process.env.TOKEN;

const prefix = "bonk";
const imageUrls = [
  "https://tenor.com/view/bonk-meme-dog-doge-gif-14889944",
  "https://tenor.com/view/sad-cat-bonk-hammer-crying-cat-gif-17177807",
  "https://tenor.com/view/go-to-baby-jail-bonk-gif-18281389",
  "https://tenor.com/view/anime-grin-fwap-fwap-hit-head-kaguya-sama-love-is-war-gif-15738748",
  "https://tenor.com/view/bonk-gif-19410756",
  "https://tenor.com/view/psyduck-farfetchd-pokemon-gif-17872492",
  "https://tenor.com/view/bonk-bongo-cat-hit-head-cat-hat-girl-gif-15558946",
  "https://tenor.com/view/jacobooghe-personal-slap-hit-head-gif-17911889",
  "https://tenor.com/view/slap-gif-9342231",
  "https://tenor.com/view/head-hit-anime-cute-gif-15150394",
];

bot.on("message", (msg) => {
  //if our message doesnt start with our defined prefix, dont go any further into function
  var tokens = msg.content.split(" ");
  if (tokens[0].toLowerCase() != prefix) {
    return;
  }

  // no @ provided
  if (tokens.length < 2) {
    msg.channel.send("no person to bonk :-:");
    return;
  }

  var user = tokens[1];
  // no valid @ provided
  if (user != null && !user.startsWith("<@!") && !user.endsWith(">")) {
    msg.channel.send("you did it wrong... no bonk for you");
    return;
  } else {
    // <sender> bonks <user>
    // random gif
    var sender = `<@!${msg.member.user.id}>`;
    var randomIndex = Math.floor(Math.random() * imageUrls.length);
    msg.channel.send(`${sender} bonks ${user} \n ${imageUrls[randomIndex]}`);
  }
});

bot.login(token);

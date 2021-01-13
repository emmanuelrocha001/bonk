const imageUrls = [
    "https://tenor.com/view/wangandhuhu-cat-belly-pat-gif-8279749",
    "https://tenor.com/view/kanna-dragonmaid-dragon-maid-misskobayashi-gif-8053566",
    "https://tenor.com/view/black-and-white-pokemon-pikachu-gif-17319374",
    "https://tenor.com/view/cute-disney-stitch-pat-ok-gif-6332507",
    "https://tenor.com/view/mala-mishra-jha-pat-head-cute-sparkle-penguin-gif-16770818",
    "https://tenor.com/view/seal-hibo-pat-love-cute-gif-16555265",
    "https://tenor.com/view/bunny-cute-head-pat-pet-kitty-gif-15162393",
    "https://tenor.com/view/lub-lub-lub-shark-shark-love-catscafe-gif-15488241",
    "https://tenor.com/view/chihya-chihaya-puchimas-patshead-puchidol-gif-5518321",
    "https://tenor.com/view/love-hears-pat-on-head-gif-13618230",
    "https://tenor.com/view/pat-patpat-hungover-vomit-toilet-gif-12526940",
    "https://tenor.com/view/kitty-so-cute-head-pat-heart-cat-kitty-gif-15586999",
    "https://tenor.com/view/anime-pat-smile-cute-blush-gif-16456868",
    "https://tenor.com/view/gravity-falls-pat-back-pat-hug-hugging-gif-3681593",
    "https://tenor.com/view/anime-head-pat-heat-pat-head-massage-gif-12434286",
    "https://tenor.com/view/cat-smack-slap-fuckyou-kitten-gif-11330282",
];

module.exports = {
    name: "pat",
    execute(msg, target) {
        if (
            target != null &&
            !target.startsWith("<@!") &&
            !target.endsWith(">")
        ) {
            msg.channel.send("no person to pat :-:");
            return;
        } else {
            // <sender> bonks <user>
            // random gif
            var sender = `<@!${msg.member.user.id}>`;
            var randomIndex = Math.floor(Math.random() * imageUrls.length);
            msg.channel.send(
                `${sender} pat pat ${target} \n ${imageUrls[randomIndex]}`
            );
        }
    },
};

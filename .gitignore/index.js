const Discord = require ("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setGame("up son humour");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDYxMTg3ODcyNjUzOTY3MzYw.DhPqRA.j-cZwpG2ph6g4x6Y0lGEpwWsBQk");

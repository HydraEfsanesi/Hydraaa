const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send("Sikiş Yükleniyor.").then(message => {
    var hydrabot = [
     "https://tenor.com/view/doggy-doggy-style-sex-intercourse-funny-sex-gif-15109614",
      "https://tenor.com/view/doggy-style-bad-teacher-cameron-diaz-justin-timberlake-intimate-gif-5982542",
      "https://tenor.com/view/hump-gif-13375503",
      "https://tenor.com/view/need-aride-grind-ride-riding-sex-gif-17227304 ",
    ];
    var espri = hydrabot[Math.floor(Math.random() * hydrabot.length)];
    message.edit(`${espri}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sik"],
  permLevel: 0
};

exports.help = {
  name: "sik",
  description: "",
  usage: ""
};
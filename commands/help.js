const { RichEmbed } = require("discord.js");


const embed = new RichEmbed()
.setDescription("Help menu")
.setColor("RANDOM")
.addField("Commands", "help, play, pause, resume, skip, leave, queue, volume");

message.channel.send(embed);
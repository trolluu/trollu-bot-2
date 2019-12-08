const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new RichEmbed()
    .setDescription("Help menu")
    .setColor("RANDOM")
    .addField("Commands:", "( help, play, pause, resume, skip, leave, queue, volume )").then(m => m.delete(10000));

    message.channel.send(embed);
}
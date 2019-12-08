const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new RichEmbed()
    .setDescription("Help menu")
    .setColor("RANDOM")
    .addField("Commands:", "( help, play, pause, resume, skip, leave, queue, volume )")
    .setFooter(member.displayName, member.user.displayAvatarURL)
    .setThumbnail(member.user.displayAvatarURL)
    .setTimestamp();

    message.channel.send(embed);
}
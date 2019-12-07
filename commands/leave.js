exports.run = (client, message, args, ops) => {
    if(!message.member.voiceChannel) return message.channel.send("Please connect to a voice channel.");
    if(!message.guild.me.voiceChannel) return message.channel.send("Sorry, bot isn\'t connected to the guild.");
    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Sorry, you aren\'t connected to the same channel.");

    message.guild.me.voiceChannel.leave();
    message.channel.send("Leaving Channel...");
}
exports.run = (client, message, args, ops) => {
    if(!message.member.voiceChannel) return message.channel.send("Please connect to a voice channel.").then(m => m.delete(5000));
    if(!message.guild.me.voiceChannel) return message.channel.send("Sorry, bot isn\'t connected to the guild.").then(m => m.delete(5000));
    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Sorry, you aren\'t connected to the same channel.").then(m => m.delete(5000));

    message.guild.me.voiceChannel.leave();
    message.channel.send("Leaving Channel...").then(m => m.delete(5000));
}
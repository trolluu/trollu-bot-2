exports.run = (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send("There currently isn\'t any music playing in this guild!").then(m => m.delete(5000));
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you aren\'t in the same channel as the music bot.").then(m => m.delete(5000));
    if(fetched.dispatcher.paused) return message.channel.send("This music is alread paused.").then(m => m.delete(5000));

    fetched.dispatcher.pause();

    message.channel.send(`Successfully paused ${fetched.queue[0].songTitle}`).then(m => m.delete(7000));
}
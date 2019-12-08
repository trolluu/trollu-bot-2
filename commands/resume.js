exports.run = (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send("There currently isn\'t any music playing in this guild!").then(m => m.delete(5000));
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you aren\'t in the same channel as the music bot.").then(m => m.delete(5000));
    if(!fetched.dispatcher.paused) return message.channel.send("This music isn\'t paused.").then(m => m.delete(5000));

    fetched.dispatcher.resume();

    message.channel.send(`Successfully resumed ${fetched.queue[0].songTitle}`);
}
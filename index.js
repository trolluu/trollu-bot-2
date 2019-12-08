const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;
const ownerID = process.env.ownerID
const active = new Map();
const prefix = 'm';



client.on("ready", () => {
    console.log(`${client.user.username}, online! on ${client.guilds.size} servers.`);
    client.user.setPresence({
        status: "idle",
        game: {
            name: "Jak słuchać muzyki 🔈 - ⛔ PRZERWA TECHNICZNA ⛔",
            type: "WATCHING"
        }
    });
});




client.on("message", message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    try {

        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        let ops = {
            ownerID: ownerID,
            active: active
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops);

    }catch(e) {
        console.log(e.stack);
    }
});

//client.on('ready', () => console.log("Online!"));

client.login(process.env.TOKEN);
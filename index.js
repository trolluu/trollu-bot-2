const Discord = require("discord.js");
//const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;
const ownerID = process.env.ownerID
const active = new Map();
let cooldown = new Set();
let cdseconds = 5;

const prefix = 'tm';

// const client = new Client({
//     disableEveryone: true
// });


// client.on("ready", () => {
//     console.log(`${client.user.username}, online! on ${client.guilds.size} servers.`);
//     client.user.setPresence({
//         status: "idle",
//         game: {
//             name: "Jak słuchać muzyki 🔈 - ⛔ PRZERWA TECHNICZNA ⛔",
//             type: "WATCHING"
//         }
//     });
// });


client.on("ready", async () =>{
    console.log(`${client.user.username}, online! on ${client.guilds.size} servers.`);
    function changing_status() {
        let status = ["| tmhelp |", "| 🎶🎵 |", `| ${client.guilds.size} servers! |`, "| 🎄🎁 |"]
        let randomStatus = status[Math.floor(Math.random() * status.length)]
        client.user.setActivity(randomStatus, {type: 'WATCHING'});
    }
    setInterval(changing_status, 60000)
});






client.on("message", message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    if(cooldown.has(message.author.id)) {
        message.delete();
        return message.reply("You have to wait 5 seconds between commands.").then(m => m.delete(5000))
    }
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        cooldown.add(message.author.id);
    }

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


    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, cdseconds * 1000)

});

//client.on('ready', () => console.log("Online!"));

client.login(process.env.TOKEN);
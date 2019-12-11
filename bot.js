const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("654313267979878423")
setInterval(function() {
channel.send(`Robot is the best`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
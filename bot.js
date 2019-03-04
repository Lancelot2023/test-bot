
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

Client.on('message' , (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "hello")){
        message.channel.send("Hello.");

    }

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

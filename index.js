const commando = require('discord.js');
const bot = new Discord.Client();
//Registers of groups
bot.registry.registerGroup('food', 'Food');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
//Bot tokens
bot.login(process.env.BOT_TOKEN);
console.log("started up!")
bot.syncGuilds

bot.on("ready", () => {
    bot.user.setStatus('dnd', 'pizza niggas') 
    bot.user.setGame("INAZUMA COOKERS");
});


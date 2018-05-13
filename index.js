//Clients for the bot
const commando = require('discord.js-commando');
const bot = new commando.Client();

//Registers of groups
bot.registry.registerGroup('food', 'Food');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
//Bot tokens
bot.login('');
console.log("started up!")
bot.syncGuilds
//Bot Status
bot.on("ready", () => {
    bot.user.setStatus('dnd') 
    bot.user.setActivity('Cooking Tutorials', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
    
});




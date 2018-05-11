const commando = require('discord.js');
var client = new Discord.Client();
var args = args;

class FeedbackCommand extends Discord.Command {
    constructor(client) {
        super(client, {
            name: 'feedback',
           group: 'food',
         memberName: 'feedback',
           description: 'Feedback your order!'
       });
    }

    async run(message, args) {
       message.reply("Thanks for the feedback!");
       client.channels.get('444047121503748096').send('Someones Review: ' + args)
    }
}

module.exports = FeedbackCommand;

const commando = require('discord.js');
var client = new Discord.Client();
var args = args;

class OrderCommand extends Discord.Command {
        constructor(client) {
            super(client, {
                name: 'order',
                group: 'food',
                memberName: 'order',
                description: 'Order Something'
            });
        }

        async run(message, args) {
            message.reply("Coming right up!");
                    client.channels.get('432444489773219873').send('Someone Ordered: ' + args)
                }
            }
        


        module.exports = OrderCommand;

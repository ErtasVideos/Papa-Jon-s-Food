const commando = require('discord.js-commando');
var client = new commando.Client();
var args = args;

class OrderCommand extends commando.Command {
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
                    this.client.channels.get('432444489773219873').send('Someone Ordered: ' + args)
                }
            }
        


        module.exports = OrderCommand;

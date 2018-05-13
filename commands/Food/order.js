const { Command } = require('discord.js-commando');

class OrderCommand extends Command {
  constructor(client) {
    super(client, {
      name: "order",
      group: "food",
      memberName: "order",
      description: "Order Something",
    });
  }

  async run(message, args) {
    message.reply("Coming right up!");
    this.client.channels.get("432444489773219873").send(`Someone Ordered: ${args}`);
    try {
      let invite = await message.channel.createInvite();
      this.client.channels.get("432444489773219873").send(`http://discord.gg/${invite.code}\n**NOTE**: Is not a permanent link`);
      if(!message.guildmember(client.user).haspermission("CREATE_INVITE")) return message.reply("i dont have perms to create invite so your food cant be delivered!");
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = OrderCommand;

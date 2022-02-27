const { Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "clear",
    description: 'clear',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async(client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Error: You Don't have permission to this command!");

        if (!args[0]) return message.channel.send("Error: Invailed Argumet");
        if (isNaN(args[0])) return message.channel.send("Error: Number not found");

        if (args[0] > 100) return message.channel.send("Error: ClearLimitation: `99`");
        if (args[0] < 1) return message.channel.send("Error: Message Cleartion Lowest Limit: `1`");

        let ClearedEmber = new MessageEmbed()
            .setTitle('Successful Cleared')
            .addField('Messages deleted by:', `${message.author}`, true)

        let number = args[0]
        number++

        ClearedEmber.setDescription(`MessageDeleted: ${number}`)

        message.channel.bulkDelete(number)
        message.channel.send(ClearedEmber).then(
            msg => msg.delete({ timeout: 3000 })
        )
    }
} 



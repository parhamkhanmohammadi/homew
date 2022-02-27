const { Message, MessageEmbed, Client } = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');


module.exports = {
    name: "nick",
    description: "Nickname Command",

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     * @returns 
     */

    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.reply('You no have `Manage_Nicknames` Permission!');

        let user = message.mentions.users.first();
        if (!user) return message.reply('You diden\'t mention anyone!');

        let nickname = args.slice(1).join(' ');
        if (!nickname) return message.reply('You diden\'t specify a nickname');

        let member = message.guild.members.cache.get(user.id);

        try {
            await member.setNickname(nickname)
        } catch (err) {
            console.warn(err)
        }

        const SuccessfulEmbed = new MessageEmbed()
            .setTitle('Successful nickname changed!')
            .setAuthor(message.author.username, message.author.avatarURL())
            .addFields({ name: 'User', value: user.username, inline: true }, { name: 'By', value: message.author.username, inline: true }, { name: 'New Nickname', value: nickname, inline: true })
            .setColor('RANDOM')
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setTimestamp()

        const UndoNickname = new MessageEmbed()
            .setTitle('Successful nickname undo!')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor('RANDOM')
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setTimestamp()

        const button1 = new MessageButton()
            .setEmoji('😋')
            .setLabel('Undo')
            .setID('undo_button')
            .setStyle('green')

        const button2 = new MessageButton()
            .setEmoji('😋')
            .setLabel('Redo')
            .setID('redo_button')
            .setStyle('green')

        const row1 = new MessageActionRow()
            .addComponent(button1)

        const row2 = new MessageActionRow()
            .addComponent(button1)
            .addComponent(button2)

        message.channel.send(SuccessfulEmbed, { components: [row1] });

        client.on('clickButton', async button => {
            if (button.id === 'undo_button') {
                button.reply.defer()
                if (!button.clicker.member.hasPermission('ADMINISTRATOR')) return button.clicker.member.send('You not have permission!')
                button.message.edit(UndoNickname, { components: [row2] })
                await member.setNickname(null)
            }

            if (button.id === 'redo_button') {
                button.reply.defer()
                await member.setNickname(nickname)
                button.message.edit(SuccessfulEmbed)
            }
        })
    }
} 


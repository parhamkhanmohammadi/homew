const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {

    name: "kick",
        category: "moderation",
        description: "Kicks the user",
        accessableby: "Administrator",
        cooldown: 3600,
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        aliases: [],
        
    run: async (bot, message, args) => {
        try {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**Shoma Ghodrate Kick Kardn Nadaryy**");
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("**Mn Nmitunm Ino Kick Konm**");

            if (!args[0]) return message.channel.send('**Kio Mikhay Kick Koni ? <:879549309530546196:914937504774361128>**')

            var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!kickMember) return message.channel.send("**Peydash nkrdm <:879549309530546196:914937504774361128>**");

            if (kickMember.id === message.member.id) return message.channel.send("**To Nmituni Kickesh Koni <:879549309530546196:914937504774361128>**")

            if (!kickMember.kickable) return message.channel.send("**Nmishe Kickesh Kard !! <:879549309530546196:914937504774361128>**")
            if (kickMember.user.bot) return message.channel.send("**Nmitunm Bot Kick Konm <:879549309530546196:914937504774361128>**")

            var reason = args.slice(1).join(" ");
            try {
                const sembed2 = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`**To Tavasote Server ${message.guild.name} Kick Shodi B Dalile - ${reason || "No Reason!"}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                kickMember.send(sembed2).then(() =>
                    kickMember.kick()).catch(() => null)
            } catch {
                kickMember.kick()
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${kickMember.user.username}** Kick Shod B Dalile ${reason} <:Chi:914834204213276712> `)
            message.channel.send(sembed);
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${kickMember.user.username}** Kick Shod <:Chi:914834204213276712> `)
            message.channel.send(sembed2);
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`Kick Logs`)
                .setColor("#ff0000")
                .setThumbnail(kickMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("> <a:Verify:914907834569854996> | **Shakhse Kick Shode :**", kickMember.user.username)
                .addField("> <a:Verify:914907834569854996> | **ID Farde Morede Nazar**", `${banMember.id}`)
                .addField("> <a:Verify:914907834569854996> | **Kick Shode Tavasote :**", message.author.username)
                .addField("> <a:Verify:914907834569854996> | **Dalile Kick : **", `${reason || "**No Reason**"}`)
                .addField("> <a:Verify:914907834569854996> | **Tarikh Va Saat :**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
}
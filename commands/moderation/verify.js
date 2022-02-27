const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "verify",
    description: "verify a member in the discord!",
    usage: "[name | nickname | mention | ID] <reason> (optional)",
    aliases: ['verify','v'],
    category: "مخصوص ادمین ها",

    run: async (bot, message, args) => {
        try {
            if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**شــما قابلیت وریفای کردن ندارید**");

            if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("**I Don't Have Permissions To Mute Someone! - [MANAGE_GUILD]**")
            if (!args[0]) return message.channel.send("**لطفا یا آیدی عددی را بزنید یا فرد مورد نظر ا منشن کنید**");

            var mutee = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!mutee) return message.channel.send("**لطفا یا آیدی عددی را بزنید یا فرد مورد نظر ا منشن کنید**");

            if (mutee === message.member) return message.channel.send("**شــما قابلیت وریفای کردن ندارید**")
            if (mutee.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**نمیتونم وریفای کنم')

            let reason = args.slice(1).join(" ");
            if (mutee.user.bot) return message.channel.send("**نمیتونی بات رو وریفای کنی**");
            const userRoles = mutee.roles.cache
                .filter(r => r.id !== message.guild.id)
                .map(r => r.id)

            let muterole;
            let dbmute = await db.fetch(`muterole_${message.guild.id}`);
            let muteerole = message.guild.roles.cache.find(r => r.name === "muted")

            if (!message.guild.roles.cache.has(dbmute)) {
                muterole = muteerole
            } else {
                muterole = message.guild.roles.cache.get(dbmute)
            }

            if (!muterole) {
                try {
                    muterole = await message.guild.roles.create({
                        data: {
                            name: "muted",
                            color: "#514f48",
                            permissions: []
                        }
                    })
                    message.guild.channels.cache.forEach(async (channel) => {
                        await channel.createOverwrite(muterole, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                            SPEAK: false,
                            CONNECT: false,
                        })
                    })
                } catch (e) {
                    console.log(e);
                }
            };

            if (mutee.roles.cache.has(muterole.id)) return message.channel.send("**Ghablan Verify Shode**")

            db.set(`muteeid_${message.guild.id}_${mutee.id}`, userRoles)
          try {
            mutee.roles.set([muterole.id]).then(() => {
                mutee.send(`ســــلام شما در ســــرور ${message.guild.name} وریفای شدید امیدوارم اوقات خــوشی را داشــــته باشـــید`).catch(() => null)
            })
            } catch {
                 mutee.roles.set([muterole.id])                               
            }
                if (reason) {
                const sembed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${mutee.user.username}**Verifyed ✅ `)
                message.channel.send(sembed);
                } else {
                    const sembed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`**${mutee.user.username}**Verifyed ✅`)
                message.channel.send(sembed2);
                }
            
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            let embed = new MessageEmbed()
                .setColor('RED')
                .setAuthor(`Verify logs`, message.guild.iconURL())
                .setThumbnail(mutee.user.displayAvatarURL({ dynamic: true }))
                .addField("> 🎉 | **Shakhse Verify Shode :**", mutee.user.username)
                .addField("> 🎉 | **Admine Zir Verify Karde Ash :**", message.author.username)
                .addField("> 🎉 | **Tarikh & Saat :**", message.createdAt.toLocaleString())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch {
            return;
        }
    }
}
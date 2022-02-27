const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')

module.exports = {
    name: "new",
    category: "کاربردی",
  run : async(client, message, args) => {  

    const verify = client.channels.cache.get('946519307561619558')


    const aks = [
        "https://cdn.discordapp.com/attachments/855401133211648020/855547446310862848/ezgif.com-gif-maker_2.gif",
    ]
        var pic = aks[Math.floor(Math.random() * aks.length)];
    
        const u = pic
    
        const picembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Welcome To H O M E' , message.guild.iconURL())
        .setDescription('👋**سلام دوست عزیز\n\n🔥به سرور هوم خوش اومدید\nلطفا برای وریفای در ویس منتظر بمونید تا ادمین ها در اولین فرصت شمارو وریفای کنن**')
        .setTimestamp()
        .setFooter(message.member.displayName ,  message.author.displayAvatarURL({ dynamic: true }))

        const sss = new MessageEmbed()
       .setDescription(`Membere **${message.member.user}** Baraye Verify Amade Ast Lotfan Chack konid`)
       .setColor('#2f3136');

            verify.send(`<@&946519307490312229>` , picembed)




        const channel = message.member.voice.channel;
        if (!channel)
          return message.channel.send(
            new MessageEmbed()
            .setDescription('👋**سلام دوست عزیز بــه سرور هوم خــیــلی خـــوش آمـــدید\nلطفا ابندا به ویس ویتینگ متصل شوید سپس از `new!` استفاده کنید**')
            .setColor('#ff0a26')
          );
          if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                
                connection.play(``);
                return message.channel.send(message.author , picembed)
          }
  }
  }
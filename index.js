const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config(); //this is the official discord.js wrapper for the Discord Api, which we use!
const colors = require("colors"); 
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
client.commands = new Discord.Collection(); //an collection (like a digital map(database)) for all your commands
client.aliases = new Discord.Collection(); //an collection for all your command-aliases
client.categories = fs.readdirSync("./commands/"); //categories
client.cooldowns = new Discord.Collection(); //an collection for cooldown commands of each user

//Loading files, with the client variable like Command Handler, Event Handler, ...

 const welcome = require("./welcome.js");
 welcome(client);

["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`http://localhost:${port}`));

const token = process.env.TOKEN

client.on('ready' , () => {
  console.log('Ready!')
})




//${client.guilds.cache.size} Server | >help` , 'First Bot For Event
client.on("ready", () => {


function AliveVoice() {
        const targetguild = client.guilds.cache.get("946519307490312222")
       const voiceChannels = targetguild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
    const me = targetguild.members.cache.get(client.user.id)
        client.user.setActivity(`Welcomer H O M E Server `)
    }; setInterval(AliveVoice, 3000)



  client.user.setPresence({
    status: 'dnd',
    activity: {
        name: 'HOME',
        type: 'PLAYING',
    }
  })

  
});


// client.on("message", message => {
//   if(message.channel.id === "933723827920318474"){ //tavalod tarikh
//     message.react('<a:cigarette90:934038459537031258>')
//     message.react('<a:cute19:934038468001161276>')
//     message.react('<a:hBD:934038473671843840>')
//     message.react('<a:diamond8:934038461491601428>')
//     message.react('<a:taj:934038469855039489>')
//     message.react('<a:fire_red:934076765033357412>')
//   }
//   if(message.channel.id === "933723823310782484"){ //selfie chat
//     message.react('🤳')
//     message.react('<a:cigarette90:934038459537031258>')
//     message.react('<a:diamond8:934038461491601428>')
//     message.react('<a:echatd5:933917405304979526>')
//     message.react('<a:heart3:933916464249991201>')
//     message.react('<a:heart1:933842637285380157>')
//     message.react('<a:fire_red:934076765033357412>')
//     message.react('<a:rose7:934038465572655154>')
//     message.react('<a:taj:934038469855039489>')
//     message.react('<a:CH_Wine:933916470134579210>')

//   }
//    if(message.channel.id === "933723819011629076"){ //adult chat
//     message.react('💦')
//     message.react('🔥')
//   }
//    if(message.channel.id === "933723851479711814"){ //fal 
//     message.react('<a:VerifyTick1:914907716957372416>')
//     message.react('🦋')
//     message.react('📜')
//   }
//    if(message.channel.id === "933723838129246208"){ //asheghane
//     message.react('<a:cigarette90:934038459537031258>')
//     message.react('<a:diamond8:934038461491601428>')
//     message.react('<a:heart2:933912657659043840>')
//     message.react('<a:qalbw:933842645103562773>') 
//     message.react('<a:zButterfly2:933924381309145138>') 
//     message.react('<a:fire1:933917785883557939>') 
//   }
//    if(message.channel.id === "914454295531896872"){ //instagram
//     message.react('<:insta:933842683129126963>')
//   }
//    if(message.channel.id === "933723814150430800"){ //grate post
//     message.react('<a:cigarette90:934038459537031258>')
//     message.react('<a:diamond8:934038461491601428>')
//     message.react('<a:echatd5:933917405304979526>')
//     message.react('<a:cute18:934038463584542720>')
//     message.react('<a:fire1:933917785883557939>')
//   }
//    if(message.channel.id === "933723847490953226"){ //ghaza kade
//     message.react('😋')
//     message.react('😝')
//     message.react('😍')
//     message.react('🤤')
//     message.react('👀')
//     message.react('<a:cigarette90:934038459537031258>')
//     message.react('<a:diamond8:934038461491601428>')
//     message.react('<a:xhearts10:933916467467006022>')
//     message.react('<a:fire1:933917785883557939>')
//     message.react('<a:SmileGuys2:934038464339537951>')
//   }
//    if(message.channel.id === "933723758538145822"){ //avatar
//     message.react('<a:cigarette90:934038459537031258>')
//     message.react('<a:diamond8:934038461491601428>')
//     message.react('<a:echatd5:933917405304979526>')
//     message.react('<a:taj:934038469855039489>')
//      message.react('<a:fire_red:934076765033357412>')
//       message.react('<a:qalbw:933842645103562773>')
//        message.react('<a:diamond_DV:933988367740309534>')
//         message.react('<a:zButterfly2:933924381309145138>')
//          message.react('<a:xhearts10:933916467467006022>')
//          message.react('<a:fire1:933917785883557939>')
//   }
//    if(message.channel.id === "934016229289635870"){ //wallpaper
//     message.react('<a:cigarette90:934038459537031258>'),
//     message.react('<a:diamond8:934038461491601428>')
//     message.react('<:887320187131560006:934038471016869899>')
//     message.react('<a:SmileGuys2:934038464339537951>')
//     message.react('<a:fire_red:934076765033357412>')

//   }
//    if(message.channel.id === "933723845809041448"){ //suti
//     message.react('<:Lve2:933857753951252500>')
//     message.react('<a:lve10:933990872733843457>')
//      message.react('<a:pepe_clap:934038460535275540>')
//   }
//    if(message.channel.id === "914485976301191198"){ //periood
//     message.react('🇯🇵')
//      message.react('<:pin:914908098534207550>')
//   }
//    if(message.channel.id === "933723843237928970"){ //delneveshte
//     message.react('<a:cigarette90:934038459537031258>')
//     message.react('<a:wilyy:933989606653837372>')
//     message.react('<:heart4:933842668503592960>')
//     message.react('<a:echatd4:933917403807633469>')
//     message.react('<:cute27:933857742467264622>')
//     message.react('<a:fire1:933917785883557939>')
//   }
//   if(message.channel.id === "933723890885222451"){ //deklame text
//     message.react('<a:atish:914934044544872490>')
//         message.react('🔥')
//   }
//   if(message.channel.id === "933723830445305926"){  //tabrik tavalod
//     message.react('<a:neondance:923527170079465523>')
//     message.react('<a:Heart4:914907644391727104>')
//     message.react('<a:Flower:914907708958847016>')
//     message.react('<:914743705502633994:914937506737295380>')
//   }
//     if(message.channel.id === "933723836313112626"){  //id game
//     message.react('<a:Tick02:933930333273993298>')
//   }
//    if(message.channel.id === "933723852515708960"){  //arz digital
//     message.react('<a:Like1:914907770153742346>')
//   }
//    if(message.channel.id === "933723856223494174"){  //divar
//     message.react('<a:Like1:914907770153742346>')
//   }
//      if(message.channel.id === "933723848824737802"){  //sargarmi
//     message.react('<:STAR_joon:923529199816429598>')
//   }
//      if(message.channel.id === "933723850326294640"){  //aya midanestid
//     message.react('🤔')
//     message.react('🥸')
//     message.react('🙀')
//   }
//        if(message.channel.id === "933723844647223326"){  //meme
//     message.react('<:Lve2:933857753951252500>')
//     message.react('<a:lve10:933990872733843457>')
//      message.react('<a:pepe_clap:934038460535275540>')
//   }
//          if(message.channel.id === "933723857364332565"){  //eslami
//     message.react('<a:Heart7:914907611940397127>')
//     message.react('<a:Heart2:914907645620674600>')
//     message.react('<a:Heart1:914907602238976062>')
//   }
//            if(message.channel.id === "933723857364332565"){  //nostalji
//     message.react('<a:cigarette90:934038459537031258>')
//     message.react('<a:zheart1:933842652170969099>')
//     message.react('<a:SmileGuys2:934038464339537951>')
//     message.react('<a:cute6:933842649037815859>')
//     message.react('<a:cute18:934038463584542720>')
//     message.react('<a:emoji_150:934038466495389727>')

//   }
// })

client.login(token)
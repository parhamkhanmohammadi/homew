const config = require("./config");
const Discord = require("discord.js");

module.exports = function (client) {

    const description = {
        name: "WelcomeImages",
        filename: "welcome.js",
        version: "4.8"
    }
    //log that the module is loaded
    console.log(` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`)
    //fires every time when someone joins the server
    client.on("guildMemberAdd", async member => {
      //If not in a guild return
      if(!member.guild) return;
      //define the welcome channel
      const channel = member.guild.channels.cache.find(ch => ch.id === config.CHANNEL_WELCOME);
      //send the welcome embed to there
      const welcome = new Discord.MessageEmbed()
      .setAuthor('Welcome To ༒☞𝐒𝐌𝐎𝐊𝐄☜༒' , member.user.displayAvatarURL({ dynamic: true }))
      .setColor('#08b5fc')
      .setImage('https://cdn.discordapp.com/attachments/914454241756717056/914906273844191282/unknown.png')
      .setDescription('**__یکی از قشنگیای زندگی اینه آدماییو کنار خودت داشته باشی که دوسشون داری...__**\n\n**یه جایی از زندگی یه آدمایی که حتی فکرشم نمیکردی ...\nمیشن بهترین دوست واست ... \nمیشن دلیل رنگ گرفتن زندگیت...\nامیدوارم هممون واسه همدیگه اون ادمه بشیم که\nزندگیمون رو رنگی میکنه ...قشنگ میکنه...\nخوش اومدین عزیزای دل به خانواده اسموک ...\nبه امید رقم زدن روزای قشنگ کنار هم...** <:Heart11:914907608584949791> ')
      channel.send(`<@${member.id}>` , welcome)
     
    })
}

//Coded by Me

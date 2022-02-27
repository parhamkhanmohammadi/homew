const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "embed",
    category: "مخصوص ادمین ها",
    aliases: ["say-embed"],
    cooldown: 2,
    usage: "embed <TITLE> ++ <DESCRIPTION>",
    description: "پیام شما را به صورت امبد ارسال میکند",
    run: async (client, message, args, user, text, prefix) => {
      if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") && !ownerID.includes(message.author.id)) return;
    try{
      if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor('#2f3136')
            .setFooter( 'HOME', 'https://cdn.discordapp.com/avatars/946753046858305586/ef8f65ec3c69107f258f9606b94400ab.png?size=2048')
            .setTitle(`❌ ERROR | You didn't provided a Title, nor a Description`)
            .setDescription(`Usage: \`${prefix}embed <TITLE> ++ <DESCRIPTION>\``)
        );
      let userargs = args.join(" ").split("++");
      let title = userargs[0];
      let desc = userargs.slice(1).join(" ")
      message.channel.send(`||@everyone@here||` , 
        new MessageEmbed()
        .setColor(`#2f3136`)
        .setFooter('HOME', 'https://cdn.discordapp.com/avatars/946753046858305586/ef8f65ec3c69107f258f9606b94400ab.png?size=2048')
        .setTitle(title ? title : "")
        .setDescription(desc ? desc : "")
      )
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor('#2f3136')
            .setFooter('HOME ', 'https://cdn.discordapp.com/avatars/946753046858305586/ef8f65ec3c69107f258f9606b94400ab.png?size=2048')
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}

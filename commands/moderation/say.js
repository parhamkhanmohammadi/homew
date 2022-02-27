const db = require("quick.db")

module.exports = {
    
    name: "say",
    category: "مخصوص ادمین ها",
        description: "Sets A Channel Where The Bot Can Send Moderation Logs!",
        usage: "[channel mention | channel ID | channel name]",

    run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")

        var text = message.content.split(' ').slice(1).join(' ');
        if(!text) return 
         message.delete();
         
                message.channel.send(text)
    }
};
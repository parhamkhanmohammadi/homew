
const Discord = require("discord.js");


module.exports = {
    name: "voice",
    aliases: ["jv", "joinvoice"],
    description: "connect voice",
    category: "اطلاعات",
    cooldown: 5,
    run: async (client, message, args) => {


    const channel = client.channels.cache.get("946519307561619559");




    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        // Yay, it worked!
        console.log("Successfully connected.");
    }).catch(e => {

        // Oh no, it errored! Let's log it to console :)
        console.error(e);
    });
  }  }
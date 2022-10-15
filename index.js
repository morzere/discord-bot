var Discord = require("discord.js");
var Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("MTAyODYwNDM3ODMwODkzOTgzNg.GGqOph.KIcEneod3GmWfgkn_3Vr_U3y_cwuWckm0UZYo0");
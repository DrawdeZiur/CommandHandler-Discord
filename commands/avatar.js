module.exports = (client, message, args) => { 
 const Discord = require("discord.js");
  
 let user = message.mentions.users.first() || client.users.cache.get(args[0])
 if (!user) user = message.author;

 let embed = new Discord.MessageEmbed()
   .setAuthor("Avatar", message.client.user.displayAvatarURL())
   .setDescription("This is the avatar of <@" + user.id + ">")
   .setImage(user.avatarURL({ size: 4096 }))
   .setColor("#36393f")
   .setFooter((message.author == user)?`Your avatar ${user.username}`: "Requested by " + message.author.username)

 message.channel.send(embed)

}

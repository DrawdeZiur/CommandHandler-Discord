module.exports = (client) => {
// Here we create a const which will have the states of the bot
  const estados = ["","prefix | d+","d+help", `${client.guilds.cache.size} Servers and ${client.users.cache.size} Users`]
  setInterval(() => {
     // Here we create another const which will be so that it is so that it changes its status automatically
     const index = Math.floor(Math.random() * (estados.length - 1) + 1); 
     // Here we will put the states of the bot, calling the "const estados" and the "const of index",
     // which will put the status of the bot in random thanks to the index. (It changes every 3 minutes)
     client.user.setActivity(estados[index], {type: 'PLAYING', status: 'online' });
   }, 30000);
};

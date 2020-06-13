module.exports = (client, message) => { 

  if(!message.content.startsWith(client.config.prefix)) return; 
  if(message.author.bot) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase()

  let cmd = client.commands.get(command);
  if(!cmd) return;

  cmd(client, message, args);
  

}

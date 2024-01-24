require("dotenv").config();
const { REST, Routes } = require('discord.js')

const commands = [
    {
      name: 'hey',
      description: 'Replies with hey!',
    },
    {
      name: 'ping',
      description: 'Pong!',
    },
    {
      name: 'github',
      description: 'My github',
    },
  ];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// When making new commands run "node src/register-commands.js" in terminal
(async () => {
    try {
        console.log("Registering commands")

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.BOT_ID,
                process.env.SERVER_ID),
            { body: commands }
        );

        console.log('commands were registered sucessfully')
    } catch (error) {
        console.log(`HEY THERE IS AN ERROR : ${error}`)
    }
})();

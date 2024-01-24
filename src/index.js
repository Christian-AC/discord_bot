require("dotenv").config();
const { Client, IntentsBitField } = require('discord.js')


//run 'nodemon' in console

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})

client.on('ready', (c) => {
    console.log("I'm online")
})

client.on('messageCreate', (message) => {
    //Stops bot from replying to itself if hello
    if(message.author.bot) {
        return
    }

    if (message.content.toLowerCase() === 'hello') {
        message.reply('Hi! hows it going?')
    }
})

//Bot interactions with '/' in discord
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'hey'){
        interaction.reply('hey')
    }

})


client.login(process.env.TOKEN)

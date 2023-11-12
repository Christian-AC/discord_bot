require("dotenv").config();
const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})

client.on('ready', (c) => {
    console.log("I'm ready")
})

client.on('messageCreate', (message) => {
    //Stops bot from replying to itself if hello
    if(message.author.bot) {
        return
    }

    if (message.content === 'hello') {
        message.reply('Hi! hows it going?')
    }
})


client.login(process.env.TOKEN)

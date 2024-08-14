import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// Whenever a message is created
client.on("messageCreate", (message) => {
    console.log(message.content);
    if(message.author.bot) return;

    // Additional usage: For creating a short url if the user passes a url by typing create websiteURL
    // Here we can also integrate chatGPT api and take users Q and give it to it and the GPT result we will give back to the user. So we have integrated GPT with discord.
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating shortID for " + url
        })
    }

    message.reply({
        content: "Hello, from Bot"
    });
})


// For normal message use messageCreate. And for the slash command we created use interactionCreate
client.on("interactionCreate", (interaction) => {
    interaction.reply("Pong!");
})

client.login(process.env.TOKEN);
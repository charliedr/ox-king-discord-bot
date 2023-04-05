// Developer Portal: discord.com/developers/applications
// Documentation: discord.js.org

// TO DO
// Track how many hugs he has received
// Select a random compliment or dad-ism from an array to tell the user

require("dotenv").config();

// destructure
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  // intents are a set of permissions used to gain access to commands/events
  // guild = server
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// listens for when the bot is ready
// cannot redefine 'client', hence the 'c'
client.on("ready", (c) => {
  // console.log(`${c.user.tag} is ready for hugs!`);
  console.log(`${c.user.username} is ready for hugs!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  // console.log(msg.content);
  if (message.content.toLowerCase() === "!hug") {
    message.reply(`Ox King gives ${message.author.username} a _big_ hug.`);
  }
});

client.login(process.env.TOKEN);

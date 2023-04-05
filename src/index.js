// Developer Portal: discord.com/developers/applications
// Documentation: discord.js.org
// Hosting: Github + Daki

// TO DO
// Track how many hugs the bot has received

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

// list of compliments
let compliments = [
  "I approve of your life decisions.",
  "You are more fun than anyone or anything I know, including bubble wrap.",
  "Even if you were cloned, you'd still be one of a kind - and the better looking one",
  "You know what's awesome? Chocolate cake, oh and your face.",
  "The chance of meeting another person like you is the only reason I talk to strangers.",
  "You look great today.",
  "Smiles look good on you.",
  "Nothing can stop you.",
];

// randomizes the compliments, then returns the [0] compliment when called
function randomize(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getQuote() {
  randomize(compliments);
}

// let totalHugs = 0;

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
    // totalHugs++
    getQuote();
    message.reply(
      `_Ox King gives ${message.author.username} a biiig hug!_\n${compliments[0]}`
    );
    // message.reply(`_Ox King gives ${message.author.username} a big hug!_\n${compliments[0]}\n\nTotal hugs given: ${totalHugs}`);
    // console.log(compliments[0]);
  }
});

client.login(process.env.TOKEN);

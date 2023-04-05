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
  "you are more fun than bubble wrap.",
  "even if you were cloned, you'd still be one of a kind - and the better looking one.",
  "you know what's awesome? Chocolate cake, oh and your face.",
  "the chance of meeting another person like you is the only reason I talk to strangers.",
  "you look great today.",
  "smiles look good on you.",
  "when you make up your mind, nothing can stop you.",
  "I'm so proud of you.",
  "your smile is contagious.",
  "you're like sunshinne on a rainy day.",
  "colors seem brighter when you're around.",
  "being around you is like a happy little vacation.",
  "is that your picture next to 'charming' in the dictionary?",
  "you were cool way before hipsters were cool.",
  "I appreciate you.",
  "everything would be better if more people were like you.",
  "you are an incredible human.",
  "you're better than a triple-scoop ice cream cone - with sprinkles.",
  "if you were a box of crayons, you'd be the big industrial name-brand one with a built-in sharpener.",
  "in high school, I bet you were voted 'most likely to continue being awesome.'",
  "you're even better than a unicorn because you're real.",
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
      `Ox King gives ${message.author.username} a biiig hug and says, "${compliments[0]}"`
    );
    // message.reply(`_Ox King gives ${message.author.username} a big hug!_\n${compliments[0]}\n\nTotal hugs given: ${totalHugs}`);
    // console.log(compliments[0]);
  }
});

client.login(process.env.TOKEN);

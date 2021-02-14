require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

/// Imports .env vars
const token = process.env.discord_token
const prefix = process.env.prefix

/// Default Discord.JS example logging code
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/// Commandhandler - Handles prefix usage
client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
});

/// Default Discord.JS example log-on code
client.login(token);
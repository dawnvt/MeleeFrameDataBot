require('dotenv').config()

const sqlite3 = require('sqlite3').verbose();
const Discord = require('discord.js');
const fs = require('fs');

/// Imports .env vars
const token = process.env.discord_token
const prefix = process.env.prefix

const client = new Discord.Client();

/// Default Discord.JS example logging code
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles)
{
  const command = require(`./Commands/${file}`);

  //this makes a new item in the collection Commands
  client.commands.set(command.name, command);
}

/// Commandhandler - Handles prefix usage
client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(msg, args);
} catch (error) {
	console.error(error);
	msg.reply('There was an error trying to execute that command!');
}

});

/// Default Discord.JS example log-on code
client.login(token);
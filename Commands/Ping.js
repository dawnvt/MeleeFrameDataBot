const { Message } = require("discord.js")

module.exports =
{
    name: 'info', 
    description: 'Gives info about the bot',
    execute(msg, arguments)
    {
        msg.channel.send('Info about the bot is coming soon.')
    }
}
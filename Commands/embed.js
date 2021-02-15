const Discord = require('discord.js');

module.exports =
{
    name: 'embed', 
    description: 'Enmeds arguments given',
    execute(msg, arguments)
    {
        const embedTest = new Discord.MessageEmbed()
            .setColor('#0095ff')
            .setTitle('Embed Test')
            .addFields(
                {   name: 'Falco Down-Air', value: '-1' },
                {   name: 'Im pepega', value: '111'    },
            )
        msg.channel.send(embedTest)
    },
}
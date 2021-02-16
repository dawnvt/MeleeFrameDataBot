const Discord = require('discord.js');
const embed = require('./embed');

const sqlite3 = require('sqlite3').verbose();

let databaseQuery = (query) => {
    return new Promise((resolve, reject) => {
        let db = new sqlite3.Database('./db/characters.db', (err) => {
            if (err) {
                console.error(err.message);
            }

            console.log('Successfully connected to character.db!')


        });

        db.serialize(() => {
            db.each(query, (err, row) => {
                if (err) {
                    console.error(err.message)
                    reject(err.message);
                }
                console.log(row);
                resolve(row);
            })
        });

        db.close((err) => {
            if (err) {

                console.error(err.message);

            }

            console.log('Close the database connection.');
        });
    })
}

const frameFunction = (queryObj, msg) => {
    const frameEmbed = new Discord.MessageEmbed();

    for (let field in queryObj) {
        if (field == 'char') frameEmbed.setTitle(`Character: ${queryObj[field]}`)
        else {
            if (queryObj[field]) { frameEmbed.addField(field, queryObj[field], true); }
        }
    }
    msg.channel.send(frameEmbed);
}

module.exports =
{
    name: 'framedata',
    description: 'Looks up character framedata for easy access',
    execute(msg, arguments) {
        databaseQuery(`SELECT * FROM ${arguments[1]} WHERE CHAR='${arguments[0]}' AND move='${arguments[2]}'`).then(queryObj => {
            //You got access to queryObj here
            //queryObj is an js object

            frameFunction(queryObj, msg); // This function now got access to queryObj and all its fields

        })
    }
}
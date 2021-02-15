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
        db.each (query, (err, row) => {
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


module.exports =
{
    name: 'framedata', 
    description: 'Looks up character framedata for easy access',
    execute(msg, arguments)
    {   
        databaseQuery(`SELECT * FROM ${arguments[1]} WHERE CHAR='${arguments[0]}' AND move='${arguments[2]}'`).then(queryObj => 
            {
                msg.channel.send(`Character: ${queryObj.char} \n Move: ${queryObj.move}`);
            })
    }
}
const sqlite3 = require('sqlite3').verbose();

let databaseQuery = (query) => {
    
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
            }

            console.log(row);
        })
    });

    db.close((err) => {
        if (err) {

          console.error(err.message);
        
        }

        console.log('Close the database connection.');
      });
}

module.exports =
{
    name: 'dblookup', 
    description: 'Looks up character framedata for easy access',
    execute(msg, arguments)
    {   
        databaseQuery(`SELECT * FROM ${arguments[1]} WHERE CHAR='${arguments[0]}' AND move='${arguments[2]}'`);

        console.log(arguments)

        msg.channel.send('Command is coming soon.')
    }
}  
const sqlite3 = require('sqlite3').verbose();

module.exports =
{
    name: 'dblookup', 
    description: 'Looks up character framedata for easy access',
    execute(msg, arguments)
    {
        let db = new sqlite3.Database('./db/characters.db', (err) => {
            if (err) {
                console.error(err.message);
            }

            console.log('Successfully connected to character.db!')
        });

        db.serialize(() => {
            db.each (`SELECT * FROM grabs WHERE CHAR='falco'`, (err, row) => {
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

        msg.channel.send('Command is coming soon.')
    }
}


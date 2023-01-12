const mongodb = require('mongodb');

//Configure MongoDB
const MongoClient = mongodb.MongoClient;

//URL
const connectionURL = `mongodb://127.0.0.1:27017`;

//Name of Database
const databaseName = 'task-manager';

//Connecting to Database
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect database');
    }

    const db = client.db(databaseName)
    // console.log('Data base is working');

    // db.collection('Players').insertOne(
    //     {
    //         firstName: 'cristiano',
    //         lastName: 'Ronaldo',
    //         team: 'Man Utd',
    //         jersey: 7
    //     },
    //     (error, Player) => {
    //         if (error) {
    //             return console.log('Unable to add new document');
    //         }

    //         console.log(Player.insertedIds);

    //     })  

    db.collection('Players').insertMany(
        [
            {
                firstName: 'Romero',
                lastName: 'Lukaku',
                team: 'Inter Millan',
                jersey: 9
            },
            {
                firstName: 'Messi',
                lastName: 'lion',
                team: 'Psg',
                jersey: 10
            },
            {
                firstName: 'David',
                lastName: 'Degea',
                team: 'Man Utd',
                jersey: 1
            }

        ],
        (error, Player) => {
            if (error) {
                return console.log('Unable to add documents!')
            }
            console.log(Player.insertedIds);
        }
    )
})

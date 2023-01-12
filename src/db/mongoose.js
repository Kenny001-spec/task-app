const mongoose = require('mongoose');


const connectionURL = `mongodb://127.0.0.1:27017/task-manager`;

mongoose.connect(connectionURL, { useNewUrlParser: true });




// const createPlayer = new Player({
//     fullName: 'Ngolo Kante',
//     age: 30,
//     team: 'Chelsea fc',
//     jersey: 7,
//     email: '     kante@chelsea.com     ',
//     password: 'KantePaSSwOrd'
// });

// createPlayer.save().then(createPlayer => {
//     console.log(createPlayer);
// }).catch(err => {
//     throw new Error(err);
// })






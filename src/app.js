const express = require('express');
const Player = require('./models/players');
require('./db/mongoose');




const app = express();
app.use(express.json())

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/players', (req, res) => {
    Player.find({}).then((players) => {
        res.status(200).send(players)
    }).catch(err => {
        res.status(500).send(err)
    })

})

app.post('/players', (req, res) => {
    const player = new Player(req.body)

    player.save().then(() => {
        res.status(201).send(player)
    }).catch(err => {
        res.status(400).send(err)
    })
})

app.get('/players/:id', (req, res) => {
    const ID = req.params.id
    Player.findById(ID).then((player) => {
        if (!req.params.id) {
            res.status(400).send(player)
        } else {
            res.status(200).send(player)
        }

    }).catch((err) => {
        res.status(400).send(err)
    })
})





app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
})
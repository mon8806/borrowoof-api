var bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const Dogs = require('../models/dogs')

const dogRouter = module.exports = require("express").Router();
dogRouter.post("/api/dog", jsonParser, (req, res) => {
    console.log(req.body)
    Dogs.create(req.body)   //Create dog info
        .then(dbDogs => {
            console.log(dbDogs) //if user creation is successful console log the data
            res.json(dbDogs)
        })
        .catch(err => {
            console.log(err)
            res.json({ result: "Error creating dog" })
        })
})
dogRouter.get('/api/dog', jsonParser, (req, res) => {
    console.log(req.body)
    Dogs.find(req.query)
        .then(dbDogs => {
            console.log(dbDogs)
            res.json(dbDogs)
        })
        .catch(err => res.status(422).json(err));
}
)

dogRouter.get('/api/dog/:id', jsonParser, (req, res) => {
    if (req.params.id) {
        Dogs.find({ ownerId: req.params.id })
            .then(dbDogs => {
                console.log(dbDogs)
                res.json(dbDogs)
            })
            .catch(err => res.status(422).json(err));
    }
    else {
        res.json([])
    }
}

)

dogRouter.get('/api/dog-reset', (req, res) => {
    Dogs.deleteMany({})
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err))
})


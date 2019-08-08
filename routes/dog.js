var bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const Dogs = require('../models/dogs')

const dogRouter = module.exports =  require("express").Router();
dogRouter.post("/api/dog", jsonParser, (req, res) =>{
    console.log(req.body)
    Dogs.create(req.body)   //Create dog info
    .then(dbDog => {         
        console.log(dbDog) //if user creation is successful console log the data
        res.json(dbDog)
    })
    .catch(err =>{
        console.log(err)
        res.json({result: "Error creating dog"})
    })
})
dogRouter.get('/api/dog', jsonParser, (req, res)=>{
    console.log(req.body)
    Dogs.find(req.query)
      .then(dbDogs => {
            console.log(dbDogs)
            res.json(dbDogs)
        })
      .catch(err => res.status(422).json(err));
  }
)


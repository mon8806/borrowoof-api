var bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const User = require('../models/user')


const userRouter = module.exports =  require("express").Router();

//Register Route
userRouter.post("/api/user", jsonParser, (req, res) =>{
    //console log request body
    User.create(req.body)   //Create a new user
    .then(dbUser => {     
        dbUser.password = ''    
        console.log(dbUser) //if user creation is successful console log the data
        res.json(dbUser)
    })
    .catch(err =>{
        console.log(err)
        res.json({result: "Error creating user"})
    })
})

userRouter.post('/api/login', jsonParser, (req, res)=>{
    console.log(req.body)
    User.find({"email": req.body.email, "password": req.body.password})
      .then(dbUser => {
            dbUser.password = ''
            console.log(dbUser[0])
            res.json(dbUser[0])
        })
      .catch(err => res.status(422).json(err));
  }
)

userRouter.get('/api/user/all', jsonParser, (req, res)=>{
    console.log(req.body)
    User.find({})
      .then(dbUser => {
            dbUser.password = ''
            res.json(dbUser)
        })
      .catch(err => res.status(422).json(err));
  }
)

userRouter.get('/api/user/remove-all', jsonParser, (req, res)=>{
    console.log(req.body)
    User.remove({})
      .then(result => {
            res.json({})
        })
      .catch(err => res.status(422).json(err));
  }
)

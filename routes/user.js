var bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const User = require('../models/user')
const validator = require('validator');
const passport = require('passport');


const userRouter = module.exports =  require("express").Router();


function validateSignupForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';
    console.log(payload)
    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
      isFormValid = false;
      errors.email = 'Please provide a correct email address.';
    }
  
  
    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
      isFormValid = false;
      errors.name = 'Please provide your name.';
    }
  
    if (!isFormValid) {
      message = 'Check the form for errors.';
    }
  
    return {
      success: isFormValid,
      message,
      errors
    };
  }
  
  /**
   * Validate the login form
   *
   * @param {object} payload - the HTTP body message
   * @returns {object} The result of validation. Object contains a boolean validation result,
   *                   errors tips, and a global message for the whole form.
   */
  function validateLoginForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';
  
    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
      isFormValid = false;
      errors.email = 'Please provide your email address.';
    }
  
    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
      isFormValid = false;
      errors.password = 'Please provide your password.';
    }
  
    if (!isFormValid) {
      message = 'Check the form for errors.';
    }
  
    return {
      success: isFormValid,
      message,
      errors
    };
  }
  
  userRouter.post('/api/signup', jsonParser, (req, res, next) => {
    const validationResult = validateSignupForm(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    }
  
  
    return passport.authenticate('local-signup', (err, user) => {
      if (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: 'Check the form for errors.',
            errors: {
              email: 'This email is already taken.'
            }
          });
        }
  
        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });
      }
  
      return res.status(200).json({
        success: true,
        message: 'You have successfully signed up! Now you should be able to log in.',
        ...user
      });
    })(req, res, next);
  });
  
  userRouter.post('/api/login', jsonParser, (req, res, next) => {
    const validationResult = validateLoginForm(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    }
  
  
    return passport.authenticate('local-login', (err, token, userData) => {
      if (err) {
        if (err.name === 'IncorrectCredentialsError') {
          return res.status(400).json({
            success: false,
            message: err.message
          });
        }
  
        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });
      }
  
  
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        token,
        ...userData
      });
    })(req, res, next);
  });
  








//Register Route
// userRouter.post("/api/user", jsonParser, (req, res) =>{
//     //console log request body
//     User.create(req.body)   //Create a new user
//     .then(dbUser => {     
//         dbUser.password = ''    
//         console.log(dbUser) //if user creation is successful console log the data
//         res.json(dbUser)
//     })
//     .catch(err =>{
//         console.log(err)
//         res.json({result: "Error creating user"})
//     })
// })

// userRouter.post('/api/login', jsonParser, (req, res)=>{
//     console.log(req.body)
//     User.find({"email": req.body.email, "password": req.body.password})
//       .then(dbUser => {
//             dbUser.password = ''
//             console.log(dbUser[0])
//             res.json(dbUser[0])
//         })
//       .catch(err => res.status(422).json(err));
//   }
// )

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

userRouter.get('/api/user-reset', jsonParser, (req, res)=>{
    console.log(req.body)
    User.remove({})
      .then(result => {
            res.json({})
        })
      .catch(err => res.status(422).json(err));
  }
)

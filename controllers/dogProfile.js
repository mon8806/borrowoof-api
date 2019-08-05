

const axios = require("axios");
const db = require("../models/dogs");


module.exports = {

  findAll: function(req, res) {
    db.Dogs.find(req.query)
      .then(dbDogs => res.json(dbDogs))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Dogs.findById(req.params.id)
      .then(dbDogs => res.json(dbDogs))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Dogs.create(req.body)
      .then(dbDogs => res.json(dbDogs))
      .catch(err => res.status(422).json(err));
  },
 
  update: function(req, res) {
    db.Dogs.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbDogs => res.json(dbDogs))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Dogs.findById(req.params.id)
      .then(dbDogs => dbDogs.remove())
      .then(dbDogs => res.json(dbDogs))
      .catch(err => res.status(422).json(err));
  }
};


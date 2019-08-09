var bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cloudinary = require('cloudinary')

const imageRouter = module.exports = require("express").Router();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})




imageRouter.post('/api/image-upload', (req, res) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))

    Promise
      .all(promises)
      .then(results => {
        console.log(results)  
        res.json(results)
        })
})

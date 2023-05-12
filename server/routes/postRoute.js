const express = require('express')
const post_route = express()
const path = require('path')
const bodyParser = require('body-parser')
const multer = require('multer')
const exp = require('constants')
const postController =  require('../controllers/postController')

post_route.use(bodyParser.json())
post_route.use(bodyParser.urlencoded({extended:true}))

post_route.use(express.static('public'))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/postImages'),(error, success) => {
            if(error){
                console.log(error)
                cb(error)
            }
        })
    },
    filename: (req, file, cb) => {
        const name = Date.now()+ '-' + file.originalname
        cb(null,name,(error, success) => {
            if(error){
                console.log(error)
                cb(error)
            }
        })
    },
})

const upload = multer({storage: storage})

post_route.post('/create-post', upload.single('image'), postController.createPost)

module.exports = post_route

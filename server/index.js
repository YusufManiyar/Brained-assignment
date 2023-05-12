const express = require('express')
const app = express()
const cors = require('cors')
const post_route = require('./routes/postRoute')

// database setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/profile')


/** EXPRESS CONFIGURATION */
app.use(cors({
    origin: '*'
}))

app.use('/api',post_route)


// start server
app.listen(4000,() => {
    console.log('server is running')
})



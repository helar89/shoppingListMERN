const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const db = require('./config/keys').mongoURI
const app = express()


// Bodyparser Middleware
app.use(bodyparser.json())

// Call de DB connection Method
mongoose
.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(()=>console.log('MongoDB Connected....'))
.catch(err => console.log(err))

const port = process.env.PORT || 5000
 app.listen(port,
    ()=> console.log(`Server started on port ${port}`))
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const db = require('./config/keys').mongoURI
const path = require('path')
const item = require('./routes/api/items')


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

// Use Routes
app.use('/api/items',item)

// Serve static assets if in production

if(process.env.NODE_ENV === 'production'){

    //Set static folder
    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}



const port = process.env.PORT || 5000
 app.listen(port,
    ()=> console.log(`Server started on port ${port}`))
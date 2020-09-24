const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Create Schema from DB

const ItemSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item',ItemSchema)
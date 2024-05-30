const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    markdown:{
        type:String,
        required:false
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Article',articleSchema)
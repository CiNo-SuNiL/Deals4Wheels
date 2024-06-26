const mongoose = require('mongoose');

const propSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    variant:{
        type:String,
        required:true
    },
    fuel:{
        type:String,
        required:true
    },
    transmission:{
        type:String,
        required:true
    },
    kilometers:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required: true
    },
    startTime:{
        type:Date,
    },
    endTime:{
        type:Date,
    },
    date:{
        type:Date,
        required:true
    },
    activity:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
    },
    images:[{
        type:String
    }],
    bidder:{
        type:String
    }
})

module.exports = mongoose.model('Car', propSchema)
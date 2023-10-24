const mongoose = require('mongoose');
const Schema= mongoose.Schema

//obje tanımlanır
const RoomSchema=new Schema({
    Category: String,
    Price: String,
    bad: Number,
    bathroom : String,
    ImgUrl:String,
    IsAvable:Boolean,

})

module.exports=mongoose.model('room',RoomSchema)
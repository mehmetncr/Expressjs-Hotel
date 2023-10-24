const mongoose = require('mongoose');
const Schema= mongoose.Schema

//obje tanımlanır
const RentSchema=new Schema({
    roomId:String,
    userId:String,
    startDate:Date,
    endDate:Date,
    price:Number,
    totalPrice:Number,    

})

module.exports=mongoose.model('rent',RentSchema)
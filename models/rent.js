const mongoose = require('mongoose');
const Schema= mongoose.Schema

//obje tanımlanır
const RentSchema=new Schema({
   
    userId:String,
    startDate:Date,
    endDate:Date,
    price:Number,
    totalPrice:Number,
    size:String,
    roomId:{
        type:Schema.Types.ObjectId,
        ref:'room'
    }


})

module.exports=mongoose.model('rent',RentSchema)
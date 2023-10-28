const express = require('express');
const session = require('express-session');

const Room = require('../models/room')
const Rent = require('../models/rent')


exports.getDeleteRent=(req,res)=>{
    Rent.findByIdAndDelete({_id:req.params.id})
    .then(()=>{
        res.redirect('/profile')
    })
}








exports.getBookRoom=(req,res)=>{
    if ( req.session.loggedIn) {   
    Room.findOne({_id:req.params.id})
    .then(room=>{
        res.render('book',{            
            room:room 
        })
    })
    .catch((err)=>{
        console.log(err);
    })
    }else{
        res.redirect('/login')
    }
}


exports.postBookRoom=(req,res)=>{
   const{startDate, endDate, size,id}=req.body;   
   const startDateObj = new Date(startDate);
   const endDateObj = new Date(endDate); 
   const dayDifference = Math.ceil(Math.abs(endDateObj - startDateObj) / (1000 * 3600 * 24)); // 1000 milisaniye * 3600 saniye * 24 saat

  
   Rent.find({ roomId: id })
   .then(rents => {
     let isRoomAvailable = true; // Oda müsaitlik durumu kontrolü
     
     for (const rent of rents) {
       const rentStartDate = new Date(rent.startDate);
       const rentEndDate = new Date(rent.endDate);
        if(rentEndDate>Date.now){
            console.log("eski tarih");
            continue;
         
        }
       if (startDateObj >= rentEndDate || endDateObj <= rentStartDate) {
         // Odanın bu tarih aralığında müsait olduğu
         console.log("Oda müsait.");
       } else {
         // Odanın bu tarih aralığında dolu olduğu
         isRoomAvailable = false;
         console.log("Oda Dolu.");
         break; // Oda dolu ise döngüyü sonlandır
       }
     }

     if (isRoomAvailable) {
      
   Room.findOne({_id:id})
   .then(room=>{

    const rent = new Rent({
        startDate: startDateObj,
        endDate:endDateObj,
        roomId:id,
        userId:req.session.user._id,
        price:room.Price,
        totalPrice:dayDifference*room.Price*size,
        size:size
        
   
      })
      rent.save()
      .then(()=>{
        res.redirect('profile')
      })
     
   }) 
   .catch((err)=>{
    console.log(err);
})  

     } else {
       // Oda dolu ise hata mesajı ile sayfayı render edin
       Room.findOne({ _id: id })
       .then(room=>{
        res.render('book', { room:room, error: 'Bu tarihlerde oda müsait değil' });
       })
      
     }
   })
   .catch(err => {
     console.error(err);
   });
};










exports.GetRooms=(req,res)=>{
    if ( req.session.loggedIn) {   
    Room.find()
    .then(rooms=>{
        res.render('rooms',{            
            rooms:rooms  
        })
    })
    .catch((err)=>{
        console.log(err);
    })
    }else{
        res.redirect('/login')
    }
}

exports.postSearchRooms = (req,res,next)=>{
   
    var date = new Date( req.body.startDate)
    
}


exports.getAddRoom=(req,res)=>{ 

    res.render('addRoom');
}

exports.postAddRoom = (req, res, next) => {
    const room = new Room({
    Category: req.body.category,
    Price: req.body.price,
    bad: req.body.bad,
    bathroom: req.body.bath, 
    ImgUrl: req.body.image,
    IsAvable: true
    });
    room.save()
    .then(() => {
        console.log(room);
        res.redirect('/rooms');
    })
    .catch((err) => {
        console.log(err);
    });

};
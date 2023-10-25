const express = require('express');
const session = require('express-session');

const Room = require('../models/room')

exports.GetRooms=(req,res)=>{
    if ( req.session.loggedIn) {   
    Room.find()
    .then(rooms=>{
        res.render('rooms',{            
            rooms:rooms,
            
        })
    }).catch((err)=>{
        console.log(err);
    })
    }else{
        res.redirect('/login')
    }
}

exports.postSearchRooms=(res,req)=>{

    console.log(req.body);
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
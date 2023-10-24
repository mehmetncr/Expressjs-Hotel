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


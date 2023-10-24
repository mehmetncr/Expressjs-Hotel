const express = require('express');

const Room = require('../models/room')

exports.GetRooms=(req,res)=>{
    Room.find()
    .then(rooms=>{
        res.render('rooms',{            
            rooms:rooms,
            
        })
    }).catch((err)=>{
        console.log(err);
    })

}


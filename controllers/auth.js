const express = require('express');


const User = require('../models/user')


exports.getRegister=(req,res)=>{    
  res.render('register',{title:'Kayıt Ol'});

}
exports.postAddUser=(req,res,next)=>{
  const user = new User({
      name: req.body.name,
      surName: req.body.surName,
      eMail: req.body.eMail,
      password : req.body.password,
      userName: req.body.userName
  })
  user.save()
  .then(()=>{
      console.log(user);
      res.redirect('/login')
  }).catch((err)=>{
      console.log(err);
  })
}
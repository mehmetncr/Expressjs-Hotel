const express = require('express');
const session = require('express-session');
const bcrypt = require("bcryptjs")

const User = require('../models/user')


exports.getRegister=(req,res)=>{    
  res.render('register',{title:'Kayıt Ol'});

}
exports.postAddUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      console.error("Şifre hashleme hatası:", err);
      return next(err); 
    }
    const user = new User({
      name: req.body.name,
      surName: req.body.surName,
      eMail: req.body.eMail,
      password: hash, 
      userName: req.body.userName,
    });
    user.save()
      .then(() => {
        console.log(user);
        res.redirect('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  });
};


exports.getLogin=(req,res)=>{ 

    res.render('login',{title:'Giriş'});
}


exports.postLogin=(req,res)=>{
  const { username, pass } = req.body;
  console.log(username,pass);
  User.findOne({userName: username})
  .then(user => {
    if (!user) {
      res.render('login', { error: 'Kullanıcı bulunamadı' });
    } else {
      bcrypt.compare(pass,user.password)
      .then(result=> {
        if (result) {
          req.session.loggedIn=true;
          console.log("result");
          res.redirect('/');
        }else{
          res.render('login', { error: 'Hatalı Şifre' });   
        }
      }).catch(err => {
        console.log(err);        
        
      });
    }
  })
  .catch(err => {
    console.log(err);    
  });
}


exports.checkAuth=(req,res,next)=> {
  if (req.session.loggedIn) {
    next();
  }else{
    res.redirect('/login');
  }
  }
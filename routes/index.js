const express = require('express');
const router = express.Router();

const roomController = require('../controllers/rooms')

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Express' });
});
router.get('/rooms',roomController.GetRooms);

router.get('/contact', (req, res, next)=> {
  res.render('contact', { title: 'Express' });
});


module.exports = router;

const express = require('express');
const router = express.Router();

const roomController = require('../controllers/rooms')


router.get('/rooms',roomController.GetRooms);
router.post('/booking',roomController.postSearchRooms);
router.get('/addRoom',roomController.getAddRoom);
router.post('/addRoom',roomController.postAddRoom);

module.exports = router;

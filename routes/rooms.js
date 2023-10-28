const express = require('express');
const router = express.Router();

const roomController = require('../controllers/rooms')


router.get('/rooms',roomController.GetRooms);
router.post('/booking',roomController.postSearchRooms);
router.get('/addRoom',roomController.getAddRoom);
router.post('/addRoom',roomController.postAddRoom);
router.get('/bookRoom/:id',roomController.getBookRoom);
router.post('/bookRoom',roomController.postBookRoom);
router.get('/deleteRent/:id',roomController.getDeleteRent);

module.exports = router;

const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Routes
router.post('/create', roomController.createRoom);
router.get('/getall', roomController.getAllRooms);
router.get('/get/:id', roomController.getRoomById);
router.put('/update/:id', roomController.updateRoom);
router.delete('/delete/:id', roomController.deleteRoom);

module.exports = router;

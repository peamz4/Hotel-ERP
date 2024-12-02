const express = require('express');
const router = express.Router();
const roomTypeController = require('../controllers/roomTypeController');

// Routes
router.post('/create', roomTypeController.createRoomType);
router.get('/getall', roomTypeController.getAllRoomTypes);
router.get('/get/:id', roomTypeController.getRoomTypeById);
router.put('/update/:id', roomTypeController.updateRoomType);
router.delete('/delete/:id', roomTypeController.deleteRoomType);

module.exports = router;

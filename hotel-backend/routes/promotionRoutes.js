const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');

// Routes
router.post('/create', promotionController.createPromotion);
router.get('/getall', promotionController.getAllPromotions);
router.get('/get/:id', promotionController.getPromotionById);
router.put('/:id', promotionController.updatePromotion);
router.delete('/:id', promotionController.deletePromotion);

module.exports = router;
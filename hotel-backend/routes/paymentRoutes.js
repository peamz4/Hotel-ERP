const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Routes
router.post('/create', paymentController.createPayment);
router.get('/getall', paymentController.getAllPayments);
router.get('/get/:id', paymentController.getPaymentById);
router.put('/update/:id', paymentController.updatePayment);
router.delete('/delete/:id', paymentController.deletePayment);

module.exports = router;

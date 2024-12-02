const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Routes
router.post('/create', customerController.createCustomer);
router.get('/getall', customerController.getAllCustomers);
router.get('/get/:id', customerController.getCustomerById);
router.put('/update/:id', customerController.updateCustomer);
router.delete('/delete/:id', customerController.deleteCustomer);

module.exports = router;

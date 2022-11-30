var express = require('express');
var router = express.Router();

const customersGetAllController = require('../controller/customerController')
router.get('/list', customersGetAllController.getData)
router.post('/customerByUser/', customersGetAllController.getByData)
router.post('/addnewcustomer', customersGetAllController.createData)
router.delete('/delete/:id', customersGetAllController.deleteUser)

module.exports = router;
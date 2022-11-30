var express = require('express');
var router = express.Router();

const walletController = require('../controller/walletController')
router.get('/list', walletController.getData)
router.post('/add', walletController.createData)
router.patch('/update', walletController.updateData)
router.delete('/delete/:id', walletController.deleteUser)

module.exports = router;
var express = require('express');
var router = express.Router();

const userGetAllController = require('../controller/userController')
router.get('/user_list', userGetAllController.getData)
router.post('/login/', userGetAllController.getByData)
router.post('/add', userGetAllController.createData)
router.delete('/delete/:id', userGetAllController.deleteUser)

module.exports = router;
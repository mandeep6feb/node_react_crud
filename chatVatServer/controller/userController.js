const {query} = require('../config/db') 
const {INSERT_QRY, SELECT_QRY, DELETE_QRY, SELECT_BY_QRY} = require('../config/sqlQuery')
const {BL_USERS} = require('../config/sqlTable');
const { USERS } = require('../models/modal');
const jwt = require("jsonwebtoken");
module.exports = {
    getData:  async(req, res) => {
        try {
            let sql = await SELECT_QRY(BL_USERS)
            let result = await query(sql);
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
     },
    getByData: async(req, res) => {
        try {
            let sql = await SELECT_BY_QRY(BL_USERS, 'mobile', "'" +req.body.mobile+"'");
            let result = await query(sql);
            if(result && result.length >0) {
                const token = jwt.sign(result[0], 'billbal-secret', {expiresIn: '120s'});
                res.json({status: true, success: true, token: token, msg: 'logged in successfully'});
            } else {
                res.json({status: false, success: false, msg: 'no user register on this mobile'});
            }
        } catch (error) {
            res.status(500).send(error);
        }
     },
     createData: async(req, res) => {
        try {
            let findUsr = await SELECT_BY_QRY(BL_USERS, 'mobile', "'" +req.body.mobile+"'")
            let userData = await query(findUsr);
            console.log(userData)
            if(userData && userData.length > 0){
                res.json({message: 'user already exist'});
            }else {
                let sql = await INSERT_QRY(BL_USERS, [USERS.name, USERS.mobile, USERS.role], ["'" +req.body.name + "'", req.body.mobile,  "'" + req.body.role + "'"])
                let result = await query(sql);
                res.json({message: 'created successfully', inserted_id: result.insertId});
            }
        } catch (error) {
            res.status(500).send(error);
        }
     },
     deleteUser: async(req, res) => {
        try {
            console.log(req.params)
            let sql = await DELETE_QRY(BL_USERS, 'ID', req.params.id)
            await query(sql);
            res.json({message: 'deleted successfully'});
        } catch (error) {
            res.status(500).send(error);
        }
     },
     
}
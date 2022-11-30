const {query} = require('../config/db') 
const {INSERT_QRY, SELECT_QRY, DELETE_QRY, SELECT_BY_QRY} = require('../config/sqlQuery')
const {WALLET} = require('../config/sqlTable');
const { WALLET_MODAL } = require('../models/modal')
module.exports = {
    getData:  async(req, res) => {
        try {
            let sql = await SELECT_QRY(WALLET)
            var result = await query(sql);
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
     },
    // getByData:  async(req, res) => {
    //     try {
    //         let sql = await SELECT_BY_QRY(WALLET, 'mobile', "'" +req.body.mobile+"'")
    //         var result = await query(sql);
    //         if(result && result.length >0) res.send(result[0]);
    //     } catch (error) {
    //         res.status(500).send(error);
    //     }
    //  },
     createData: async(req, res) => {
        try {
            let sql = await INSERT_QRY(WALLET, [WALLET_MODAL.amount, WALLET_MODAL.user, WALLET_MODAL.type, WALLET_MODAL.description], [req.body.amount, req.body.user,  "'" + req.body.type + "'", "'" + req.body.description + "'"])
            var result = await query(sql);
            res.json({message: 'created successfully', inserted_id: result.insertId});
        } catch (error) {
            res.status(500).send(error);
        }
     },
     updateData: async(req, res) => {
        try {
            let sql = await INSERT_QRY(WALLET, [WALLET_MODAL.amount, WALLET_MODAL.user, WALLET_MODAL.type, WALLET_MODAL.description], [req.body.amount, req.body.user,  "'" + req.body.type + "'", "'" + req.body.description + "'"])
            var result = await query(sql);
            res.json({message: 'created successfully', inserted_id: result.insertId});
        } catch (error) {
            res.status(500).send(error);
        }
     },
     deleteUser: async(req, res) => {
        try {
            let sql = await DELETE_QRY(WALLET, 'ID', req.params.id)
            await query(sql);
            res.json({message: 'deleted successfully'});
        } catch (error) {
            res.status(500).send(error);
        }
     },
     
}
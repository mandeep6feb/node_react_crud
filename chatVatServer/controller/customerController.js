const {query} = require('../config/db') 
const {INSERT_QRY, SELECT_QRY, DELETE_QRY, SELECT_BY_QRY} = require('../config/sqlQuery')
const {CUSTOMERS} = require('../config/sqlTable');
const { CUSTOMER } = require('../models/modal')
module.exports = {
    getData:  async(req, res) => {
        // try {
        //     let sql = await `SELECT p. p_id, p.cus_id, p.p_name, c1.name1, c2.name2  FROM product AS p  LEFT JOIN customer1 AS c1  ON p.cus_id=c1.cus_id  LEFT JOIN customer2 AS c2  ON p.cus_id = c2.cus_id `
        //     var result = await query(sql);
        //     res.send(result);
        // } catch (error) {
        //     res.status(500).send(error);
        // }
     },
    getByData:  async(req, res) => {
        try {
            let sql = await SELECT_BY_QRY(CUSTOMERS, 'mobile', "'" +req.body.mobile+"'")
            var result = await query(sql);
            if(result && result.length >0) res.send(result[0]);
        } catch (error) {
            res.status(500).send(error);
        }
     },
     createData: async(req, res) => {
        try {
            let stringfy = JSON.stringify(req.body.customers)
            let sql = await INSERT_QRY(CUSTOMERS, [CUSTOMER.total_bal, CUSTOMER.add_by, CUSTOMER.customers, CUSTOMER.status], [req.body.total_bal, req.body.add_by, stringfy, req.body.status])
            var result = await query(sql);
            res.json({message: 'created successfully', inserted_id: result.insertId});
        } catch (error) {
            res.status(500).send(error);
        }
     },
     updateData: async(req, res) => {
        try {
            let sql = await INSERT_QRY(CUSTOMERS, [CUSTOMER.amount, CUSTOMER.user, CUSTOMER.type, CUSTOMER.description], [req.body.amount, req.body.user,  "'" + req.body.type + "'", "'" + req.body.description + "'"])
            var result = await query(sql);
            res.json({message: 'created successfully', inserted_id: result.insertId});
        } catch (error) {
            res.status(500).send(error);
        }
     },
     deleteUser: async(req, res) => {
        try {
            let sql = await DELETE_QRY(CUSTOMERS, 'ID', req.params.id)
            await query(sql);
            res.json({message: 'deleted successfully'});
        } catch (error) {
            res.status(500).send(error);
        }
     },
}
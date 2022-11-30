const INSERT_DATA = "INSERT INTO";
const SELECT_Data = "SELECT * FROM";
const DELETE_Data = "DELETE FROM";


async function  SELECT_QRY(table){
    let qry = await SELECT_Data + " " + table;
    return qry;
}
async function INSERT_QRY(table ,modal = [], values = []){
    let qry = await INSERT_DATA + " " + table + " (" + modal + ") " + "VALUES" + " (" + values + ")";
    return qry;
}
async function DELETE_QRY(table , whereKey ,id){
    let qry = await DELETE_Data + " " + table + " WHERE " + whereKey + "=" + "" + id + "";
    return qry;
}
async function SELECT_BY_QRY(table , whereKey ,id){
    let qry = await SELECT_Data + " " + table + " WHERE " + whereKey + "=" + "" + id + "";
    console.log(qry)
    return qry;
}
module.exports = {
    INSERT_DATA,
    SELECT_Data,
    SELECT_QRY,
    INSERT_QRY,
    DELETE_QRY,
    SELECT_BY_QRY
}

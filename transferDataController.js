const transferModel = require('../Models/transferModel');

async function getAllTransferData(req,res) {
    try{
        let transferData = await transferModel.find();
        if(transferData) {
            res.status(200).json({
                data: transferData
            })
        } else {
            res.status(400).json({
                message: "Not Found"
            })
        }
    } catch(err) {
        res.status(500).json({
            message: "error"
        })
    }
}

module.exports = getAllTransferData;
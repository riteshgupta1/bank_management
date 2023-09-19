const mongoose = require('mongoose');

let transferSchema = new mongoose.Schema({
    "from" : {
        type: String,
        required: true
    },
    "to" : {
        type: String,
        required:true
    },
    "ammount" : {
        type: String,
        required:true
    }
});
const transferModel = mongoose.model('TransferModel',transferSchema);

module.exports = transferModel;
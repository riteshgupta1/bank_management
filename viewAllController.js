const userModel = require('../Models/userModel');

async function viewAllCustomer(req,res) {
    try{
        let users = await userModel.find();
        if(users) {
            res.status(200).send(users);
        } else {
            res.status(400).json({
                message: "Could Not Fetch Data"
            });
        }
    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = viewAllCustomer;
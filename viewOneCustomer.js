const userModel = require('../Models/userModel');
async function viewOneCustomer(req,res) {
    try {
        const userID = req.params.id;
        const user = await userModel.findById(userID);
        if(user) {
            res.status(200).json({
                message: "User Found",
                data: user
            })
        } else {
            res.status(400).json({
                message: "Invalid Request Customer not found"
            })
        }
    } catch(err) {
        res.status(500).json({
            message: "There Might be some error"
        })
    }
}
module.exports = viewOneCustomer;
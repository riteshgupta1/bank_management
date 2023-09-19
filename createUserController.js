const userModel = require('../Models/userModel');
async function createUser(req,res) {
    try {
        const userData = req.body;
        const user  = await userModel.create(userData);
        if(user){
            res.status(200).json({
                data: user,
                message: "User Craeted SuccessFully"
            });
        } else {
            res.status(400).json({
                message: "Some Data is missing"
            })
        }
    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}
module.exports = createUser;
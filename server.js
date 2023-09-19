const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const createuserController = require('./Controllers/createUserController');
const viewAllCustomer = require('./Controllers/viewAllController');
const viewOneCustomer = require('./Controllers/viewOneCustomer');
const transferAmmount = require('./Controllers/transferAmmountController');
const getAllTransferData = require('./Controllers/transferDataController');
app.post("/signup",createuserController);
app.get("/viewAllCustomer",viewAllCustomer);
app.get("/viewOneCustomer/:id",viewOneCustomer);
app.patch("/transferAmmount",transferAmmount);
app.get("/transactions",getAllTransferData);
const PORT = process.env.PORT || 3000;
app.listen(PORT,function() {
    console.log("SuccessFully Connected to 3000 Port");
});
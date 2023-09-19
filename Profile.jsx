import React, { useEffect,useState } from 'react'
import axios from 'axios'
function Profile() {
    const [user,setUser] = useState("");
    const [users,setusers] = useState([]);
    const pathname = window.location.pathname;
    const userid = pathname.split("/")[2];
    const [transferAcc,settransferAcc] = useState();
    const [transferAmt,setTransferAmt] = useState(0);
    const [loading,setLaoding] = useState(false);
    useEffect(() => {
        async function fetchData(){
            setLaoding(true);
            let url = "http://localhost:3000/viewOneCustomer/" + userid;
            let usersData = await axios.get("http://localhost:3000/viewAllCustomer");
            let userData = await axios.get(url);
            setusers(usersData.data);
            setUser(userData.data.data);
            setLaoding(false);
        }
        fetchData();
    },[]);

    const setTranferAmmount = (e) => {
        setTransferAmt(e.target.value);
    }

    const setTransferAccount = (e)  => {
        settransferAcc(e.target.value);
        console.log(transferAcc);
    }

    const transferMoney = async function(e) {
        console.log("Entered Into Transfer Money");
        let senderId = userid;
        let recieverId = transferAcc;
        let ammount = transferAmt;
        if(!recieverId || recieverId === "none") {
            window.alert("None of The reciver is Selected");
            return;
        } else if(user.Balance < ammount) {
            window.alert("Insufficient Balance");
            return;
        } else if(ammount === 0) {
            window.alert("Please Enter Some Ammount");
            return;
        }
        e.preventDefault();
        await axios.patch(
            "http://localhost:3000/transferAmmount",
            {
                senderId:senderId,
                recieverId:recieverId,
                ammount: ammount
            }
        )
        window.alert("Money Transfer SucessFully");
        const newUser = {
            userName: user.userName,
            email: user.email,
            Balance: user.Balance - ammount
        }
        setUser(newUser);
    }

    const filteredUser = users.filter((cuser) => cuser._id !== user._id);
  return (
    (loading)?<div>Loading...</div>:
    <div>
        <br/>
        <br/>
        <div className='text-center'>
            <div><b>Name:- </b>{user.userName}</div><br/>
            <div><b>Email:- </b>{user.email}</div><br/>
            <div><b>Balance:- </b>{user.Balance}</div>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <h1 className='text-center'>Transfer Money</h1>
            <form>
                <div className='form-group'>
                    <label>Select the Account in which you want to Transfer</label>
                    <select className='form-control' onChange={setTransferAccount}>
                        <option value = "none">none</option>
                        {
                            (filteredUser)?filteredUser.map(function(use){
                                return(
                                    <option value = {use._id} >{use.userName}</option>
                                )
                            }):<option>Loading....</option>
                        }
                    </select>
                </div>
                <br/>

                <div className = 'form-group'>
                    <label>
                        Enter Ammount to Transfer
                    </label>
                    <input type = "Number" max = "100000" min = "0" className='form-control' value = {transferAmt} onChange = {setTranferAmmount}/>
                </div>
                <br/>
                <div className='form-group'>
                    <button className = 'btn btn-primary form-control' onClick = {transferMoney}>Transfer</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Profile
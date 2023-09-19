import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
function Transactions() {
    const [transactions,setTransactions] = useState([]);
    const [loading,setLaoding] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLaoding(true);
            let dataFetched = await axios.get('http://localhost:3000/transactions/');
            // let dataFetchedJSON = await dataFetched.json();
            console.log(dataFetched.data.data);
            setTransactions(dataFetched.data.data);
            setLaoding(false);
        }
        fetchData();
    },[]);
    return (
        (loading)?<div>Loading...</div>:
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Reciever</th>
                    <th scope="col">Ammount</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map(function(transaction,idx){
                        return (
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{transaction.from}</td>
                                <td>{transaction.to}</td>
                                <td>{transaction.ammount}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Transactions
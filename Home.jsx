import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Home() {
    const [users,setUsers] = useState([]);
    const [loading,setLaoding] = useState(true);
    useEffect(()  => {
        async function fetchData() {
          setLaoding(true);
          let userData = await axios.get('http://localhost:3000/viewAllCustomer');
          setUsers(userData.data);
          console.log(typeof(userData.data));
          setLaoding(false);
        }
        fetchData();
    },[]);
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">user-name</th>
      <th scope="col">Email</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
    {
        (loading)?<div>
        Loading...
    </div>:users.map(function(user,idx) {
        const url = "/profile/" + user._id;
        return (
            <tr>
                <td>{idx + 1}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.Balance}</td>
                <td><Link to = {url}><button className = 'btn btn-primary' id = {user._id} replace>View</button></Link></td>
            </tr>
        )
    }
    )
    }
  </tbody>
</table>
)
}

export default Home;
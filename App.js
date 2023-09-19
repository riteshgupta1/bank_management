import Home from './Components/Home';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Transactions from './Components/Transactions';
import './App.css';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = "/"  element = {<Home></Home>}></Route>
        <Route path = "/profile/:id" element = {<Profile></Profile>}></Route>
        <Route path = "/transactions" element = {<Transactions></Transactions>}></Route>
      </Routes>
    </>
  );
}

export default App;

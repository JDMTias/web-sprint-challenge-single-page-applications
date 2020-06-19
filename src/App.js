import React,{useState} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Order from './Order'
import OrderForm from './OrderForm'

const App = () => {
  const [pizza, setPizza]=useState([])
  console.log(pizza)
  return (
    <Router>
    <div>
      <h1>Mario's Pizza</h1>
  <Route path='/' exact component={()=><Order/>}/>
  <Route path={'/pizza'} component={() =><OrderForm pizza={pizza} setPizza={setPizza}/>}/>
    </div>
    </Router>
  );
};
export default App;

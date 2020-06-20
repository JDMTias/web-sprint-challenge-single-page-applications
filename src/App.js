import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Order from "./Order";
import OrderForm from "./OrderForm";
import formSchema from "./Validation";
import * as yup from "yup";
import axios from 'axios'


const initialFormValues = {
  name: "",
  size: "",
  toppings: {
    goomba: false,
    koopa: false,
    blooper: false,
    cheepcheep: false,
    bowser: false,
  },
};

const initialDisabled = true;


const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  console.log(formValues);
  const [pizza, setPizza]= useState([]);
  const [errorMessage, setError] = useState({});
  const [disabled, setDisabled] = useState(initialDisabled);

  const onInputChange = (event) => {

    const currentField = event.target.name;
    const value = event.target.value;

    yup
      .reach(formSchema, currentField)
      .validate(value)
      .then(valid => {
        setError({ ...errorMessage, [currentField]:"" });
      })
      .catch((error) => {
        setError({ ...errorMessage, [currentField]: error.errors[0] });
      });
    setFormValues({ ...formValues, [currentField]: value });
  };

  const onCheckboxChange = (event) => {
    const {name, checked}= event.target;
    setFormValues({ ...formValues,
      toppings:{...formValues.toppings, [name]: checked} 
    });
  };

  const getPizza = () => {
    axios.get('https://reqres.in/api/user')
    .then(response => {
      console.log(response)
      setPizza(response.data[1].data)
    })
    .catch(err => {
      console.log(err)
    })

  }

  const postPizza = (newPizza) => {
    axios.post('https://reqres.in/api/user', newPizza)
    .then(res => {
      console.log(res.data)
      setPizza([...pizza, res.data])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      toppings: Object.keys(formValues.toppings)
      
       .filter(toppingName => (formValues.toppings[toppingName]===true)) ,
      special: formValues.special,
    }
    postPizza(newPizza)
    console.log(newPizza)
    console.log(pizza)
  };
  
  useEffect(() => {
    getPizza()
  }, [])

  useEffect(() => {
    
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])


  return (
    <Router>
      <div>
        <h1>Mario's Pizza</h1>
        <Route path="/" exact component={() => <Order />} />
        <Route
          path="/pizza">
          <OrderForm pizza={pizza} setPizza={setPizza} onInputChange={onInputChange} onSubmitHandler={onSubmitHandler} onCheckboxChange ={onCheckboxChange} values={formValues} disabled={disabled}/>
        </Route>
        
      </div>
    </Router>
  );
};
export default App;

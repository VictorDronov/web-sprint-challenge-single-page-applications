import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./Form";
import Confirmation from "./Confirmation";
import axios from "axios";

const initialFormValues = {
  size: "",
  sauce: "",
  toppings: {
    peppercorn: false,
    sausage: false,
    canadianBacon: false,
    spiceyItalianSausage: false,
    garlicChicken: false,
    onionsGreenPepper: false,
    dicedTomatos: false,
    blackOlives: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
  },
  name: "",
};
const initialDisabled = true;
const initialOrder = [];
const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

const App = () => {
  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  
  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/", newOrder)
      .then((res) => {
        setOrder(order.concat(res.data));
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };
  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      toppings: Object.keys(formValues.toppings).filter(item => formValues.toppings[item])
    };
    postNewOrder(newOrder);
  };

  const resetForm = () => setFormValues(initialFormValues);

  const checkBox = (name, ischecked) => {
    setFormValues({
      ...formValues,
      toppings: { ...formValues.toppings, [name]: ischecked },
    });
  };
  const dataInput = (name, data) => {
    setFormValues({
      ...formValues,
      [name]: data,
    });
  };
  return (
    <div className="Header">
      <div>
        <h1>Lambda Craft Pizza</h1>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order</Link>
      </div>
      <Switch>
        <Route path="/pizza">
          <Form
            value={formValues}
            submit={submit}
            dataInput={dataInput}
            disable={disabled}
            resetForm={resetForm}
            checkBox={checkBox}
          />
        </Route>
        <Route path="/orderConformation">
          <Confirmation />
        </Route>
      </Switch>
      <div className="topSection"></div>
      <div className="bottomSection"></div>
    </div>
  );
};
export default App;

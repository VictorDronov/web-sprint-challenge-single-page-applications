import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./Form";
import Confirmation from "./Confirmation";

const initialFormValues = {
  size: "",
  sauce: {
    Original: false,
    RedGarlic: false,
    RanchBBQ: false,
    SauceSpinach: false,
    Alfredo: false,
  },
  toppings: "",
  name: "",
};
const initialDisabled = true
const initialOrder = []

const App = () => {
  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  return (
    <div className="Header">
      <div>
        <h1>Lambda Craft Pizza</h1>
        <Link to="/">Home</Link>
        <Link to="/form">Order</Link>
      </div>
      <Switch>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/conformation">
          <Confirmation />
        </Route>
      </Switch>
      <div className="topSection"></div>
      <div className="bottomSection"></div>
    </div>
  );
};
export default App;

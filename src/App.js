import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./Form";
import Confirmation from "./Confirmation";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./formSchema";
import RecentOrder from "./RecentOrder";

const initialFormValues = {
  size: "",
  sauce: "",
  toppings: {
    peppercorn: false,
    sausage: false,
    canadianBacon: false,
    spiceyItalianSausage: false,
    garlicChicken: false,
    onions: false,
    greenPepper: false,
    dicedTomatos: false,
    blackOlives: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
  },
  name: "",
  instructions: "",
};
const initialDisabled = true;
const initialOrder = [];
const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
  instructions: "",
};

const App = () => {
  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [recentOrder, setRecentOrder] = useState(initialOrder);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/pizza", newOrder)
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
      size: formValues.size,
      sauce: formValues.sauce,
      instructions: formValues.instructions.trim(),
      toppings: Object.keys(formValues.toppings).filter(
        (item) => formValues.toppings[item]
      ),
    };
    console.log(newOrder)
    postNewOrder(newOrder);
    setRecentOrder(newOrder);
  };

  const resetForm = () => setFormValues(initialFormValues);

  const checkBox = (name, ischecked) => {
    setFormValues({
      ...formValues,
      toppings: { ...formValues.toppings, [name]: ischecked },
    });
  };

  const dataInput = (name, data) => {
    yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(data)
      // if the validation is successful, we can clear the error message
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: data,
    });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="Header">
      <div>
        <h1>Lambda Craft Pizza</h1>
        <Link to="/">Home</Link>
        <Link className="orderForm" to="/pizza">
          Order
        </Link>
      </div>
      <div>
        <Link to="/recentOrders">Recent Orders</Link>
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
            errors={formErrors}
          />
        </Route>
        <Route path="/recentOrders">
          <RecentOrder order={recentOrder} />
        </Route>
        <Route path="/Confirmation">
          <Confirmation />
        </Route>
      </Switch>
      <div className="topSection"></div>
      <div className="bottomSection"></div>
    </div>
  );
};
export default App;

import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Conformation from "./Confirmation";

const Form = () => {
  return (
    <div className="Header">
      <form>
        <h3>Choose Size</h3>
        <select>
          <option>--Choose Your Size--</option>
          <option>--Small--</option>
          <option>--Medium--</option>
          <option>--Large--</option>
          <option>--Extra-Large--</option>
        </select>
        <label>
          {" "}
          <h3>Choose Sauce</h3>
          <input type="radio" />
          <label>Original Red</label>
          <input type="radio" />
          <label>Garlic Ranch</label>
          <input type="radio" />
          <label>BBQ Sauce</label>
          <input type="radio" />
          <label>Spinach Alfredo</label>
        </label>
        <h3>Add Topings</h3>
        <label>
          <input type="checkbox"></input>
          Peppercorn
        </label>
        <label>
          <input type="checkbox"></input>
          Sausage
        </label>
        <label>
          <input type="checkbox"></input>
          Canadian Bacon
        </label>
        <label>
          <input type="checkbox"></input>
          Spicey Italian Sausage
        </label>
        <label>
          <input type="checkbox"></input>
          Garlic Chicken
        </label>
        <label>
          <input type="checkbox"></input>
          Onions
        </label>
        <label>
          <input type="checkbox"></input>
          Green Pepper
        </label>
        <label>
          <input type="checkbox"></input>
          Diced Tomatos
        </label>
        <label>
          <input type="checkbox"></input>
          Black Olives
        </label>
        <label>
          <input type="checkbox"></input>
          artichoke Hearts
        </label>
        <label>
          <input type="checkbox"></input>
          Three Cheese
        </label>
        <label>
          <input type="checkbox"></input>
          Pineapple
        </label>
        <label>
          <input type="checkbox"></input>
          Extra Cheese
        </label><br/>
        <label>
          Name On Order
          <input type="text"></input>
        </label><br/>

        <Link to="/conformation">Submit</Link>
        <Switch>
          <Route path="/conformation">
            <Conformation />
          </Route>
        </Switch>
      </form>
    </div>
  );
};
export default Form;

import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Conformation from "./Confirmation";

const Form = (props) => {
  const { dataInput, submit, disable, checkBox, value, errors } = props;

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    dataInput(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onCheckBox = (evt) => {
    const { name, checked } = evt.target;
    checkBox(name, checked);
  };
  
  return (
    <div className="Header">
      <form onSubmit={onSubmit}>
        <div className="errors">
          <div className="errorName">{errors.name}</div>
          <div className="errorSize">{errors.size}</div>
          <div className="errorSauce">{errors.sauce}</div>
          <div className="instructions">{errors.instructions}</div>
        </div>
        <h3>Choose Size</h3>
        <select
          className="size"
          onChange={onInputChange}
          value={value.size}
          name="size"
        >
          <option className="size" value="">
            --Choose Your Size--
          </option>
          <option className="sizeS" value="small">
            --Small--
          </option>
          <option className="sizeM" value="medium">
            --Medium--
          </option>
          <option className="sizeL" value="large">
            --Large--
          </option>
          <option className="sizeXL" value="extraLarge">
            --Extra-Large--
          </option>
        </select>
        <h3>Choose Sauce</h3>
        <label>
          <input
            className="firstSauce"
            type="radio"
            name="sauce"
            onChange={onInputChange}
            checked={value.sauce === "originalRed"}
            value="originalRed"
          />
          Original Red
        </label>
        <label>
          <input
            className="secondSauce"
            type="radio"
            name="sauce"
            onChange={onInputChange}
            checked={value.sauce === "garlicRanch"}
            value="garlicRanch"
          />
          Garlic Ranch
        </label>
        <label>
          <input
            className="thirdSauce"
            type="radio"
            name="sauce"
            onChange={onInputChange}
            checked={value.sauce === "bbqSauce"}
            value="bbqSauce"
          />
          BBQ Sauce
        </label>
        <label>
          <input
          className='fourthSauce'
            type="radio"
            name="sauce"
            onChange={onInputChange}
            checked={value.sauce === "spinachAlfredo"}
            value="spinachAlfredo"
          />
          Spinach Alfredo
        </label >
        <h3>Add Topings</h3>
        <label>
          <input
          className="topping1"
            type="checkbox"
            name="peppercorn"
            checked={value.toppings.peppercorn}
            onChange={onCheckBox}
          />
          Peppercorn
        </label>
        <label>
          <input
          className="topping2"
            type="checkbox"
            name="sausage"
            checked={value.toppings.sausage}
            onChange={onCheckBox}
          />
          Sausage
        </label>
        <label>
          <input
          className="topping3"
            type="checkbox"
            name="canadianBacon"
            onChange={onCheckBox}
            checked={value.toppings.canadianBacon}
          />
          Canadian Bacon
        </label>
        <label>
          <input
          className="topping4"
            type="checkbox"
            name="spiceyItalianSausage"
            onChange={onCheckBox}
            checked={value.toppings.spiceyItalianSausage}
          />
          Spicey Italian Sausage
        </label>
        <label>
          <input
          className="topping5"
            type="checkbox"
            name="garlicChicken"
            onChange={onCheckBox}
            checked={value.toppings.garlicChicken}
          />
          Garlic Chicken
        </label>
        <label>
          <input
          className="topping6"
            type="checkbox"
            name="onions"
            onChange={onCheckBox}
            checked={value.toppings.onions}
          />
          Onions
        </label>
        <label>
          <input
          className="topping7"
            type="checkbox"
            name="greenPepper"
            onChange={onCheckBox}
            checked={value.toppings.greenPepper}
          />
          Green Pepper
        </label>
        <label>
          <input
          className="topping8"
            type="checkbox"
            name="dicedTomatos"
            onChange={onCheckBox}
            checked={value.toppings.dicedTomatos}
          />
          Diced Tomatos
        </label>
        <label>
          <input
          className="topping9"
            type="checkbox"
            name="blackOlives"
            onChange={onCheckBox}
            checked={value.toppings.blackOlives}
          />
          Black Olives
        </label>
        <label>
          <input
          className="topping10"
            type="checkbox"
            name="artichokeHearts"
            onChange={onCheckBox}
            checked={value.toppings.artichokeHearts}
          />
          Artichoke Hearts
        </label>
        <label>
          <input
          className="topping11"
            type="checkbox"
            name="threCheese"
            onChange={onCheckBox}
            checked={value.toppings.threCheese}
          />
          Three Cheese
        </label>
        <label>
          <input
          className="topping12"
            type="checkbox"
            name="pineapple"
            onChange={onCheckBox}
            checked={value.toppings.pineapple}
          />
          Pineapple
        </label>
        <label>
          <input
          className="topping13"
            type="checkbox"
            name="extraCheese"
            onChange={onCheckBox}
            checked={value.toppings.extraCheese}
          />
          Extra Cheese
        </label>
        <br />
        <label>
          Name On Order&nbsp;
          <input
            type="text"
            name="name"
            placeholder="Order Name"
            value={value.name}
            onChange={onInputChange}
          />
        </label>
        <br />{" "}
        <label>
          Special Instructions&nbsp;
          <input
            type="text"
            name="instructions"
            placeholder="instructions"
            value={value.instructions}
            onChange={onInputChange}
          />
        </label>
        <br />
        <button >Submit</button>
        <Link to="/orderConformation"></Link>
        <Switch>
          <Route path="/orderConformation">
            <Conformation />
          </Route>
        </Switch>
      </form>
    </div>
  );
};
export default Form;

import React, {useEffect} from "react";
import axios from 'axios'

const RecentOrder = (props) => {
const {order}= props

console.log(order)

// instructions: ""
// name: "victor dronov"
// sauce: "garlicRanch"
// size: "medium"
// toppings: ["sausage"]

  return (
<div>
    <h2>Recent order</h2>
  <p>{order.size}</p>
  <p>{order.sauce}</p>
  <p>{order.toppings}</p>
</div>
  );
};
export default RecentOrder;
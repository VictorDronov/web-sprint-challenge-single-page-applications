import React from "react";
import RecentOrder from './RecentOrder'
import { Route, Switch} from "react-router-dom"


const Confirmation = () => {






  return (
<div>
    <h3>Congrats! Pizza is on it's way!</h3>
        <Switch>
          <Route path="/recentOrders">
            <RecentOrder />
          </Route>
        </Switch>
</div>
  );
};
export default Confirmation;

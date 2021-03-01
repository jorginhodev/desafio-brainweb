import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Mount from "../pages/Mount";
import Checkout from "../pages/Checkout";

const Routes = () => (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/mount" component={Mount} />
        <Route path="/checkout" component={Checkout} />
    </Switch>
);

export default Routes;

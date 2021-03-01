import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Mount from "../pages/Mount";
import Recommendation from "../pages/Recommendation";
import Checkout from "../pages/Checkout";

const Routes = () => (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/mount" component={Mount} />
        <Route path="/recommendation" component={Recommendation} />
        <Route path="/checkout" component={Checkout} />
    </Switch>
);

export default Routes;

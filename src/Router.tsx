import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main/Main";
import Dashboard from "./Components/Dashboard/Dashboard";
import Start from "./Components/Start/Start";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}><Main /></Route>
                <Route path="/home"><Dashboard /></Route>
                <Route path="/start"><Start /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
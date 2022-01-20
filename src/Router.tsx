import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main/Main";
import Dashboard from "./Components/Dashboard/Dashboard";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"><Main /></Route>
                <Route path="/home"><Dashboard /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
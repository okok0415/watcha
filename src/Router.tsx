import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main/Main";
import Dashboard from "./Components/Dashboard/Dashboard";
import Start from "./Components/Start/Start";
import Sign_up from "./Components/Login/Sign_up";
import Sign_in from "./Components/Login/Sign_in";
import { BrowseRouter } from "./Components/Browse/BrowseRouter";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}><Main /></Route>
                <Route path="/home"><Dashboard /></Route>
                <Route path="/start"><Start /></Route>
                <Route path='/sign_up'><Sign_up/></Route>
                <Route path='/sign_in'><Sign_in/></Route>
                <Route path='/browse' component={BrowseRouter} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
import { Route, Switch } from "react-router-dom"
import Profile from "./Profile"

export const BrowseRouter = ({match} : {match : any}) => {
    return (
        <>
            <Switch>
                <Route path={match.path + '/profile'} component={Profile}/>
            </Switch>
        </> 
    )
}
import { Route, Switch } from "react-router-dom"
import Video from "./Video"

export const BrowseRouter = ({match} : {match : any}) => {
    return (
        <>
            <Switch>
                <Route path={match.path + '/video'} component={Video}/>
            </Switch>
        </> 
    )
}
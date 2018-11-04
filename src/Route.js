import React from "react"
import  {Route,BrowserRouter,Switch,NavLink} from "react-router-dom"
import App from "./App"
import Info from "./Info"

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Switch>
                <Route exact path ="/" component={App}/>
                <Route path ="/info" component={Info}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
};


export default Routing
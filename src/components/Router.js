import React from "react";
import { Route, Switch } from  "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";
import PageNotFound from "../pages/PageNotFound";

const Router = () => {

    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/user/login" exact>
                    <Login />
                </Route>
                <Route path="/user/signup" exact>
                    <Signup />
                </Route>
{/* 
                <Route>
                    <Detail />
                </Route>
                <Route>
                    <Post />
                </Route>
*/}             
                <Route component={PageNotFound} />
            </Switch>
            
        </React.Fragment>
    )
}

export default Router;
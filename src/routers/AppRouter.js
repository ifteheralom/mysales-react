import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header';

import Mysalesapp from '../components/mysalesapp';
import Login from '../components/login';
import Register from '../components/register'
import Profile from '../components/profile'

const TempComp = () => (
    <div>
        <p>This is a temp para...!!!</p>
    </div>
)
const NotFoundComp = () => (
    <div>
        <p>404: The Page was not found</p>
        <Link to="/">Go Home</Link>
    </div>
)

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact={true} path="/" component={Mysalesapp}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route component={NotFoundComp}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
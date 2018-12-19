import * as React from "react"
import { Component } from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Route, Switch } from "react-router-dom"

import { Home } from "./views/home"
import { Store } from "redux";
import { State } from "../redux/state";

export const App = (props: {}) => <>
    <div className="header">
        <img className="logo" src="images/logo.svg" alt="Logo" />
        <div>
            <h1>Nathan Russell</h1>
            <div className="sub-heading">Professional Software/Web Developer</div>
        </div>
    </div>
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
</>
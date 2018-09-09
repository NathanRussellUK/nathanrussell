import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Route, Switch, Link } from "react-router-dom"

import { Home } from "./views/home"
import { GetInTouch } from "./views/get-in-touch"
import { Logo } from "./logo"
import { Store } from "redux"
import { State } from "../redux/state"

export class App extends React.Component<{}, {
    dialogOpen: boolean
}> {
    constructor(props) {
        super(props)

        this.state = {
            dialogOpen: false
        }
    }
    openDialog = () => {
        this.setState({"dialogOpen": true})
    }
    render() {
        return <>
            <div className="header">
                <Logo />
                <nav>
                    {/* <a className="block" onClick={this.openDialog}>How it works</a> */}
                    <Link className="button" to="/get-in-touch">Get in touch</Link>
                </nav>
            </div>
            <div className="page">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/get-in-touch" component={GetInTouch} />
                </Switch>
            </div>
            {this.state.dialogOpen && null}
            {/* <div className="footer">
                <p>Footer</p>
            </div> */}
        </>
    }
}
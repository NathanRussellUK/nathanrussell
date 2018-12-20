import * as React from "react"
import { RouteComponentProps, withRouter } from "react-router"
import { Link, Route, Switch } from "react-router-dom"

import { Logo } from "./logo"
import { Home } from "./views/home"

export const App = withRouter((props: RouteComponentProps) => <>
    <div className="header">
        <div className="header-main">
            <Logo />
            <div>
                <h1>Nathan Russell</h1>
                <div className="sub-heading">Professional Software/Web Developer</div>
            </div>
        </div>
        <nav>
            {props.location.pathname === "/politics" && <Link to="/" className="fas fa-briefcase fa-2x work" />}
            {props.location.pathname === "/" && <Link to="/politics" className="fas fa-bullhorn fa-2x politics" />}
        </nav>
    </div>
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
</>)
import * as React from "react"
import { RouteComponentProps, withRouter } from "react-router"
import { Link, Route, Switch } from "react-router-dom"

import { Logo } from "./logo"
import { Home } from "./views/home"
import { Politics } from "./views/politics"

export const App = withRouter((props: RouteComponentProps) => <>
    <div className="header">
        <Link className="header-main" to={props.location.pathname === "/" ? "/" : "/politics"}>
            <Logo />
            <div>
                <h1>Nathan Russell</h1>
                <div className="sub-heading">Professional Software/Web Developer</div>
            </div>
        </Link>
        <nav>
            {props.location.pathname === "/" && <Link to="/politics" className="fas fa-bullhorn fa-2x politics" />}
            {props.location.pathname !== "/" && <Link to="/" className="fas fa-briefcase fa-2x work" />}
        </nav>
    </div>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/politics" component={Politics} />
    </Switch>
</>)
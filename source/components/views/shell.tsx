import * as React from "react"
import { RouteComponentProps, withRouter, Link } from "react-router"

import { Logo } from "../logo"

export const Shell = withRouter((props: { children: any } & RouteComponentProps<{}, {}>) => <>
    <div className={`header${props.location.pathname === "/" ? " work" : " politics"}`}>
        <Link className="header-main" to={props.location.pathname === "/" ? "/" : "/politics"}>
            <Logo />
            <div>
                <h1>Nathan Russell</h1>
                <div className="sub-heading">{props.location.pathname === "/" ? "Professional Software/Web Developer" : "Walcot Community Campaigner"}</div>
            </div>
        </Link>
        <nav>
            {props.location.pathname === "/" && <Link to="/politics" className="fas fa-bullhorn fa-lg" />}
            {props.location.pathname !== "/" && <Link to="/" className="fas fa-briefcase fa-lg" />}
        </nav>
    </div>
    {props.children}
</>)
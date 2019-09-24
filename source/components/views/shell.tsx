import * as React from "react"
import { RouteComponentProps, withRouter, Link } from "react-router"

import "./shell.scss";

import { Logo } from "../logo"
import Helmet from "react-helmet";
import { HooksContext } from "../../redux/hooks";

export const Shell = withRouter(props => {
    const context = React.useContext(HooksContext)

    return <div className="shell">
        <Helmet>
            <title>Nathan Russell | {props.location.pathname === "/" ? "Work" : "Politics"}</title>
        </Helmet>
        <div className={`header${props.location.pathname === "/" ? " work" : " politics"}`}>
            <Link className="header-main" to={props.location.pathname === "/" ? "/" : "/politics"}>
                <Logo />
                <div>
                    <h1>Nathan Russell</h1>
                    <div className="sub-heading">{props.location.pathname === "/" ? "Professional Software/Web Developer" : "Walcot Community Campaigner"}</div>
                </div>
            </Link>
            <nav>
                {props.location.pathname === "/" && <Link to="/politics"><i className="fas fa-bullhorn fa-lg" /></Link>}
                {props.location.pathname !== "/" && <Link to="/"><i className="fas fa-briefcase fa-lg" /></Link>}
            </nav>
        </div>
        {props.children}
    </div>
})
import * as React from "react"
import { Link } from "react-router-dom"

export const Logo: React.SFC<{}> = () => <Link to="/" className="logo">
    <img src="/images/logo.svg" />
    <div className="logo-copy">
        <h1>Nathan Russell</h1>
        <span>Professional Software &amp; Web Developer</span>
    </div>
</Link>
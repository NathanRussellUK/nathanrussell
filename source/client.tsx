import * as React from "react";

import { routes } from './components/app';
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";

const initClient = () => {
    const ClientApp = <Router history={browserHistory}>{routes}</Router>;

    render(ClientApp, document.getElementById("root"));
}

if (typeof window !== "undefined") {
    initClient()
}
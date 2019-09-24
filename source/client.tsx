import * as React from "react";

import { routeComponents } from './routes';
import { render } from "react-dom";
import { runAllDuckEggSagas } from "./redux/sagas";
import { createStore, AnyAction } from "redux";
import { State, reducer } from "./redux/state";
import { getAppliedMiddleware } from "./redux/middlewares";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { HooksContext } from "./redux/hooks";
import { createApplicationStore } from "./redux/store";

import "./theme/main.scss";

const initClient = () => {
    const store = createApplicationStore();
    runAllDuckEggSagas();

    const ClientApp = <HooksContext.Provider value={store}><Router history={browserHistory}>{routeComponents}</Router></HooksContext.Provider>;

    render(ClientApp, document.getElementById("root"));
}

if (typeof window !== "undefined") {
    initClient()
}
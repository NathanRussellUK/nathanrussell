import * as React from "react";

import { App, routes } from './components/app';
import { render } from "react-dom";
import { runAllDuckEggSagas } from "./redux/sagas";
import { createStore, AnyAction } from "redux";
import { State, reducer } from "./redux/state";
import { getAppliedMiddleware } from "./redux/middlewares";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";

const initClient = () => {
    const store = createStore<State, AnyAction, any, any>(reducer, getAppliedMiddleware());
    runAllDuckEggSagas();

    const ClientApp = <Provider store={store}><Router history={browserHistory}>{routes}</Router></Provider>;

    render(ClientApp, document.getElementById("root"));
}

if (typeof window !== "undefined") {
    initClient()
}
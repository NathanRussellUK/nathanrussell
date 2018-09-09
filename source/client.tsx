import * as React from "react";

import { App } from "./components/app";
import { render } from "react-dom";
import { runAllDuckEggSagas } from "./redux/sagas";
import { createStore, AnyAction } from "redux";
import { State, reducer } from "./redux/state";
import { getAppliedMiddleware } from "./redux/middlewares";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const initClient = () => {
    const store = createStore<State, AnyAction, any, any>(reducer, getAppliedMiddleware());
    runAllDuckEggSagas();

    const ClientApp = <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>;

    render(ClientApp, document.getElementById("root"));
}

if (typeof window !== "undefined") {
    initClient()
}
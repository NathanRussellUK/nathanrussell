import * as express from "express"
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";


import { Provider } from "react-redux";
import { StaticRouter, Redirect } from "react-router";
import { App } from "./components/app";
import { createStore, AnyAction } from "redux";
import { State, reducer } from "./redux/state";
import { getAppliedMiddleware } from "./redux/middlewares";

const initServer = () => {
    const server = express()

    const port = process.env.PORT || 8080

    server.use(express.static("static"))

    server.use("*", (req, res) => {
        const context = {}
        const store = createStore<State, AnyAction, any, any>(reducer, getAppliedMiddleware());
    
        const ServerApp = <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App />
            </StaticRouter>
        </Provider>
        
        const appHtml = `<html>
        <head>
            <title>Web Template</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <link rel="stylesheet" href="/styling/main.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.css">        </head>
        <body>
            <div id="root">
                ${ReactDOMServer.renderToString(ServerApp)}
            </div>
            <script src="/scripts/bundle.js"></script>
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        </body>
        </html>`;
    
        res.send(appHtml)
    });

    server.listen(port)
}

if (typeof window === "undefined") {
    initServer();
}
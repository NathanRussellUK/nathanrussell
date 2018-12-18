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

    const port = process.env.PORT || 3000

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
        
        const appHtml = `
<html>
<head>
    <title>Nathan Russell</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    <link rel="stylesheet" href="styling/main.css">

    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
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
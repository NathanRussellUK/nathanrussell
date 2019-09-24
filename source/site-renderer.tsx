import * as fs from "fs"
import * as React from "react"
import * as ReactDOMServer from "react-dom/server"
import * as pathLib from "path";
import { URL } from "url"

import { routeComponents, routesDefinitions, RouteDefinition, IndexPath } from './routes';
import { RouterContext, match, createRoutes } from "react-router";
import { HooksContext } from "./redux/hooks";
import { runAllDuckEggSagas } from "./redux/sagas";
import { createApplicationStore } from "./redux/store";

const routes = createRoutes(routeComponents[0]);

console.log("APP DIR", pathLib.dirname(process.mainModule.filename))

const appDir = pathLib.dirname(process.mainModule.filename);;

const renderPage = (path: string) => {
    const location = new URL(path, 'https://example.org/');

    console.log("RENDERING", location.pathname);

    return new Promise<string>((res, rej) => {
        match(
            {
                routes,
                location
            },
            (error, redirectLocation, renderProps) => {
                if (error) {
                    rej(error)
                }

                else if (redirectLocation) {
                    rej(`REDIRECT: ${redirectLocation}`)
                }

                else if (!!renderProps) {
                    const store = createApplicationStore();
                    runAllDuckEggSagas();

                    const ServerApp = () => <HooksContext.Provider value={store}><RouterContext {...renderProps} /></HooksContext.Provider>;

                    const content = `<html>
<head>
<title>Nathan Russell</title>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
<link rel="stylesheet" href="/styles/main.css">

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
    ${ReactDOMServer.renderToString(React.createElement(ServerApp))}
</div>
<script src="/scripts/bundle.js"></script>
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver,IntersectionObserverEntry,fetch,Promise"></script>
</body>
</html>`;

                    res(content);
                }

                else {
                    rej(`NOT FOUND!`)
                }
            }
        )

    })
}

const writeFile = (path: string, data: string) => {
    return new Promise((res, rej) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                rej(err);
            }

            else {
                res();
            }
        })
    })
}

const writeDirectory = (path: string) => {
    return new Promise((res, rej) => {
        fs.mkdir(path, (err) => {
            if (err) {
                rej(err);
            }

            else {
                res();
            }
        })
    })
}

const exists = (path: string) => {
    return new Promise((res, rej) => {
        fs.exists(path, exists => res(exists));
    })
}

const writePage = async (path: string[], content: string) => {
    const staticFolderPath = appDir + "/../static";

    for (const pathElement of path) {
        const i = path.indexOf(pathElement);

        if (i === path.length - 1) {
            const destination = staticFolderPath + "/" + path.join("/");

            console.log("WRITE FILE", destination)

            await writeFile(destination, content);
        }

        else {
            const destination = staticFolderPath + "/" + path.slice(0, i + 1).join("/");

            const dirExists = await exists(destination);

            if (!dirExists) {
                console.log("MKDIR", destination);

                await writeDirectory(destination);
            }
        }
    }
}

const copyFile = async (source: string, destination: string) => {
    return new Promise((res, rej) => fs.copyFile(source, destination, (err) => {
        if (err) {
            rej(err);
        }

        else {
            res();
        }
    }))
}

const getPathFromRouteDefinition = (path: string) => {
    if (!path || path === "/") {
        return "";
    }

    if (path === IndexPath) {
        return "/";
    }

    return path
}

const routePathBuilder = (routeDefinitions: RouteDefinition[], initPath: string = "") => {
    const routePaths = routeDefinitions.reduce<string[]>((paths, routeDefinition) => {
        const path = getPathFromRouteDefinition(routeDefinition.path);

        const isRoot = path === "";
        const isIndex = path === "/";

        // Should root routes always be ignored, regardless of flag?
        const isIgnored = routeDefinition.__IGNORE_ON_SERVER;

        const newPath = !(isRoot || isIndex) ?
            initPath + "/" + path
            :
            initPath + path;

        const childRoutePaths: string[] = !routeDefinition.childRoutes ?
            []
            :
            routePathBuilder(routeDefinition.childRoutes, newPath);

        const newPaths = [...paths];

        if (!isIgnored && routeDefinition.component) {
            newPaths.push(newPath);
        }

        newPaths.push(...childRoutePaths);

        return newPaths;
    }, [])

    return routePaths;
}

const renderSite = async () => {
    try {
        const scriptsDirExists = await exists(appDir + "/../static/scripts");

        if (!scriptsDirExists) {
            console.log("MKDIR", appDir + "/../static/scripts");

            await writeDirectory(appDir + "/../static/scripts");
        }

        const stylesDirExists = await exists(appDir + "/../static/styles");

        if (!stylesDirExists) {
            console.log("MKDIR", appDir + "/../static/styles");

            await writeDirectory(appDir + "/../static/styles");
        }

        await copyFile(appDir + "/bundle.js", appDir + "/../static/scripts/bundle.js");
        await copyFile(appDir + "/main.css", appDir + "/../static/styles/main.css");

        const routePaths = routePathBuilder(routesDefinitions);

        for (let routePath of routePaths) {
            const content = await renderPage(routePath);

            const path = routePath.split("/");
            path.shift();

            const isIndex = (path[path.length - 1] === IndexPath) || (path[path.length - 1] === "")
            if (isIndex) {
                path[path.length - 1] = "index.html";
            }
            else {
                path[path.length - 1] += ".html";
            }

            await writePage(path, content);
        }

        console.log("SITE RENDER SUCCESS!");
    }

    catch (err) {
        console.error("SITE RENDER FAILURE!", err);
    }
}

renderSite();
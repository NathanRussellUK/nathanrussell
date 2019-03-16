import * as React from "react"
import { Route, IndexRoute } from "react-router"

import { AirQualityWalcotParade } from "./components/views/articles/article_air-quality-walcot-parade"
import { Home } from "./components/views/home"
import { Politics } from "./components/views/politics"
import { CAZConsultationSubmission } from './components/views/articles/article_caz-consultation-submission';
import { Shell } from './components/views/shell';

const routesDefinitions: RouteDefinition[] = [{
    component: Shell,
    path: "/",
    childRoutes: [
        {
            path: "_INDEX",
            component: Home
        },
        {
            path: "politics",
            childRoutes: [
                {
                    path: "_INDEX",
                    component: Politics
                },
                {
                    path: "articles",
                    childRoutes: [
                        {
                            path: "concerns-over-air-quality-research-at-walcot-parade",
                            component: AirQualityWalcotParade
                        },
                        {
                            path: "clean-air-zone-consultation-submission",
                            component: CAZConsultationSubmission
                        }
                    ]
                }
            ]
        }
    ]
}];

interface RouteDefinition {
    path?: string
    component?: React.ComponentType<any>,
    childRoutes?: RouteDefinition[]
}

const routeComponentBuilder = (routeDefinitions: RouteDefinition[]) => {
    const routeComponents = routeDefinitions.map(routeDefinition => {
        const childRouteComponents = !routeDefinition.childRoutes ?
            []
            :
            routeComponentBuilder(routeDefinition.childRoutes);

        if (routeDefinition.component) {
            return routeDefinition.path === "_INDEX" ?
                <IndexRoute component={routeDefinition.component} />
                :
                <Route path={routeDefinition.path} component={routeDefinition.component}>
                    {...childRouteComponents}
                </Route>;
        }

        return <Route path={routeDefinition.path}>{...childRouteComponents}</Route>;
    })

    return routeComponents;
}

const getPathFromRouteDefinition = (path: string) => {
    if (!path || path === "/") {
        return "";
    }

    if (path === "_INDEX") {
        return "/";
    }

    return path
}

const routePathBuilder = (routeDefinitions: RouteDefinition[], initPath: string = "") => {
    const routePaths = routeDefinitions.reduce<string[]>((paths, routeDefinition) => {
        const path = getPathFromRouteDefinition(routeDefinition.path);

        const isRoot = path === "";
        const isIndex = path === "/";

        const newPath = !(isRoot || isIndex) ?
            initPath + "/" + path
            :
            initPath;

        const childRoutePaths: string[] = !routeDefinition.childRoutes ?
            []
            :
            routePathBuilder(routeDefinition.childRoutes, newPath);

        const newPaths = [...paths];

        if (!(isRoot || isIndex) && routeDefinition.component) {
            newPaths.push(newPath);
        }

        newPaths.push(...childRoutePaths);

        return newPaths;
    }, [])

    return routePaths;
}

export const routeComponents = routeComponentBuilder(routesDefinitions);
export const routePaths = routePathBuilder(routesDefinitions);
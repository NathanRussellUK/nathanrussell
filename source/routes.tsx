import * as React from "react"
import { Route, IndexRoute } from "react-router"

import { AirQualityWalcotParade } from "./components/views/articles/article_air-quality-walcot-parade"
import { Home } from "./components/views/home"
import { Politics } from "./components/views/politics"
import { CAZConsultationSubmission } from './components/views/articles/article_caz-consultation-submission';
import { Shell } from './components/views/shell';

const routesDefinitions: RouteDefinition[] = [{
    component: Shell,
    path: "*",
    childRoutes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/politics",
            childRoutes: [
                {
                    path: "/",
                    component: Politics
                },
                {
                    path: "/articles",
                    childRoutes: [
                        {
                            path: "/concerns-over-air-quality-research-at-walcot-parade",
                            component: AirQualityWalcotParade
                        },
                        {
                            path: "/clean-air-zone-consultation-submission",
                            component: CAZConsultationSubmission
                        }
                    ]
                }
            ]
        }
    ]
}]

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
            routeComponentBuilder(routeDefinition.childRoutes)

        if (routeDefinition.component) {
            return routeDefinition.path === "/" ?
                <IndexRoute component={routeDefinition.component}>
                    {...childRouteComponents}
                </IndexRoute>
                :
                <Route path={routeDefinition.path} component={routeDefinition.component}>
                    {...childRouteComponents}
                </Route>
        }

        return <>childRouteComponents</>
    })

    return routeComponents
}

const routePathBuilder = (routeDefinitions: RouteDefinition[], initPath: string = "") => {
    const routePaths = routeDefinitions.reduce<string[]>((paths, routeDefinition) => {
        const path = ((!routeDefinition.path) || (routeDefinition.path === "*")) ? "" : routeDefinition.path
        const childRoutePaths: string[] = !routeDefinition.childRoutes ?
            []
            :
            routePathBuilder(routeDefinition.childRoutes, initPath + path)

        const newPaths = [...paths]

        if (path !== "" && routeDefinition.component) {
            newPaths.push(initPath + routeDefinition.path)
        }

        newPaths.push(...childRoutePaths)

        return newPaths
    }, [])

    return routePaths
}

export const routeComponents = routeComponentBuilder(routesDefinitions);
export const routePaths = routePathBuilder(routesDefinitions);
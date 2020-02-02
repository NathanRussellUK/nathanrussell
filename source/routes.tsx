import * as React from "react"
import { Route, IndexRoute } from "react-router"

import { Home } from "./components/views/home"
import { Shell } from './components/views/shell';

import { AdoptingThirdPartyTechnologies } from './components/views/articles/article_adopting-third-party-technologies';
import { AirQualityWalcotParade } from "./components/views/articles/article_air-quality-walcot-parade"
import { BlockScopedVariables } from './components/views/articles/article_block-scoped-variables';
import { CAZConsultationSubmission } from './components/views/articles/article_caz-consultation-submission';
import { WalcotElectionResults2019 } from './components/views/articles/article_walcot-election-results-2019';
import { WebEmailW3C } from './components/views/articles/article_web-email-w3c';

export interface RouteDefinition {
    path?: string
    component?: React.ComponentType<any>
    childRoutes?: RouteDefinition[]
    __IGNORE_ON_SERVER?: boolean
}

export const IndexPath = "__INDEX"

export const routesDefinitions: RouteDefinition[] = [{
    component: Shell,
    path: "/",
    childRoutes: [
        {
            path: IndexPath,
            component: Home
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
                },
                {
                    path: "walcot-election-results-2019",
                    component: WalcotElectionResults2019
                },
                {
                    path: "block-scoped-variables",
                    component: BlockScopedVariables
                },
                {
                    path: "web-email-w3c",
                    component: WebEmailW3C
                },
                {
                    path: "adopting-third-party-technologies",
                    component: AdoptingThirdPartyTechnologies
                }
            ]
        }
    ]
}];

const routeComponentBuilder = (routeDefinitions: RouteDefinition[]) => {
    const routeComponents = routeDefinitions.map(routeDefinition => {
        const childRouteComponents = !routeDefinition.childRoutes ?
            []
            :
            routeComponentBuilder(routeDefinition.childRoutes);

        if (routeDefinition.component) {
            return routeDefinition.path === IndexPath ?
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

export const routeComponents = routeComponentBuilder(routesDefinitions);
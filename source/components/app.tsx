import * as React from "react"
import { Router, Route } from "react-router"

import { Logo } from "./logo"
import { AirQualityWalcotParade } from "./views/articles/article_air-quality-walcot-parade"
import { Home } from "./views/home"
import { Politics } from "./views/politics"
import { CAZConsultationSubmission } from './views/articles/article_caz-consultation-submission';
import { Shell } from './views/shell';

export const routes = <Route component={Shell}>
    <Route path="/" component={Home} />
    <Route path="/politics" component={Politics} />
    <Route path="/politics/articles/concerns-over-air-quality-research-at-walcot-parade" component={AirQualityWalcotParade} />
    <Route path="/politics/articles/clean-air-zone-consultation-submission" component={CAZConsultationSubmission} />
</Route>

export const App = () => <Router>
    {routes}
</Router>
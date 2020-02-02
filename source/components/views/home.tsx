import * as React from "react"
import { Features } from "../features";
import { BlockLinks } from "../block-links";
import { featureList } from "../../feature-list";
import { blockLinkList } from "../../block-link-list";
import { articlesList } from "./articles/articles-list";

import "../../theme/column-layout.scss";
import "./home.scss";

export const Home = () => <div className="column-layout">
    <div className="column" id="intro">
            <p>A professional software/Web developer, passionate about working with the latest and greatest
                technology.</p>
            <p>Taking websites, mobile apps, and APIs from design to release has given me a strong working knowledge of most
                aspects of the development process.</p>
            <BlockLinks blockLinks={blockLinkList} />
    </div>
    <div className="column" id="features">
        <Features features={featureList} />
    </div>
    <div className="column job">
        <img alt="Rocketmakers Logo" className="employer-logo" src="/images/rocketmakers.svg" />
        <h2>
            <i className="fas fa-briefcase"></i>
            Developer
        </h2>
        <p className="dates">2016 - current</p>
    </div>
    <div className="column" id="rocketmakers-feature">
        
    </div>
    <div className="column" id="spicerack-feature">
        
    </div>
    <div className="column job">
        <img alt="Spicerack Logo" className="employer-logo" src="/images/spicerack.png" />
        <h2>
            <i className="fas fa-briefcase"></i>
            Junior Developer
        </h2>
        <p className="dates">2015 - 2016</p>
        <p>During my apprenticeship, my work required good communication, working with backend developers and designers, and provided me with an introduction to repository and coding conventions.</p>
        <p>In addition to my duties as a developer, I was allocated time for pursuing independent study. I read through programming documentation and developers’ blog posts, worked through practical tutorials, and used the skills I’d learnt to produce original content.</p>
    </div>
    <div className="column full-width" id="articles">
        <h2>Articles</h2>
        <BlockLinks blockLinks={articlesList} />
    </div>
</div>
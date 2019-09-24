import * as React from "react"
import { RandomNumber } from "../random-number";
import { Features } from "../features";
import { BlockLinks } from "../block-links";
import { featureList } from "../../feature-list";
import { blockLinkList } from "../../block-link-list";
import { Link } from "react-router";

import "../../theme/column-layout.scss";

export const Home = () => <div className="column-layout work">
    <div className="column-one">
        <div className="content">
            <p>A professional software/Web developer, passionate about working with the latest and greatest
                technology.</p>
            <p>Taking websites, mobile apps, and APIs from design to release has given me a strong working knowledge of most
                aspects of the development process.</p>
            <BlockLinks blockLinks={blockLinkList} />
        </div>

        <RandomNumber />

        <p className="spider-text">This site won't track you, and you're free to <Link className="inline-link" to="https://github.com/NathanRussellUK/nathanrussell" target="_blank">check out its source code</Link> on Github!</p>
    </div>

    {/* Use the intersection observer with effect hook and cleanup on column two, and automate the animation delay */}
    <div className="column-two">
        <Features features={featureList} />
    </div>
</div>

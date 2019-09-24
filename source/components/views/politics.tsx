import * as React from "react"

import { BlockLinkInternal } from "../block-links"

import "../../theme/column-layout.scss";

export const Politics = () => <div className="column-layout politics">
    <div className="column-one">
        <BlockLinkInternal
            id="walcot-election-results-2019"
            href="/politics/articles/walcot-election-results-2019"
            iconClass="fas fa-lg fa-poll"
            text="Walcot Election Results 2019"
        />
        <BlockLinkInternal
            id="concerns-over-air-quality-research-at-walcot-parade"
            href="/politics/articles/concerns-over-air-quality-research-at-walcot-parade"
            iconClass="fas fa-lg fa-envelope"
            text="Concerns Over Air Quality Research at Walcot Parade"
        />
        <BlockLinkInternal
            id="clean-air-zone-consultation-submission"
            href="/politics/articles/clean-air-zone-consultation-submission"
            iconClass="fas fa-lg fa-file-alt"
            text="Clean Air Zone Consultation Submission"
        />
    </div>
    <div className="column-two">
    </div>
</div>
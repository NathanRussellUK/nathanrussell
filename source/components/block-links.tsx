import * as React from "react";

export interface BlockLinkProps {
    id: string;
    href: string;
    iconClass: string;
    text: string;
    big?: boolean;
}

const BlockLink = (props: BlockLinkProps) => <a
    className={`block-link${props.big ? " big" : ""}`}
    href={props.href}
    target="_blank"
>
    <i className={props.iconClass}></i>
    {props.text}
</a>

const mapBlockLink = (blockLink, index) => <BlockLink
    {...blockLink}
    key={blockLink.id}
/>

interface BlockLinksProps {
    blockLinks: BlockLinkProps[]
}

export const BlockLinks = (props: BlockLinksProps) => <div className="block-links">
    {props.blockLinks.map(mapBlockLink)}
</div>

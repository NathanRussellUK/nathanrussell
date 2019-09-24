import * as React from "react";
import { Link } from "react-router";

import "./block-links.scss";

export interface BlockLinkProps {
    id: string;
    href: string;
    iconClass: string;
    text: string;
    big?: boolean;
}

export const BlockLinkInternal = (props: BlockLinkProps) => <Link
    className={`block-link${props.big ? " big" : ""}`}
    to={props.href}
>
    <i className={props.iconClass}></i>
    {props.text}
</Link>


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

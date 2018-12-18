import { BlockLinkProps } from "./components/block-links";

export const blockLinkList: BlockLinkProps[] = [
    {
        id: "email",
        href: "mailto:personal@nathanrussell.me.uk",
        iconClass: "fas fa-lg fa-envelope",
        text: "personal@nathanrussell.me.uk",
        big: true
    },
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/nathanrusselluk/",
        iconClass: "fab fa-lg fa-linkedin",
        text: "LinkedIn"
    },
    {
        id: "github",
        href: "https://github.com/NathanRussellUK",
        iconClass: "fab fa-lg fa-github",
        text: "Github"
    },
    {
        id: "twitter",
        href: "https://twitter.com/NathanRussellUK",
        iconClass: "fab fa-lg fa-twitter",
        text: "Twitter"
    }
];
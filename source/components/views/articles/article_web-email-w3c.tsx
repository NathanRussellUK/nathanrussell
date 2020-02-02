import * as React from "react"

import "./article.scss";

export const WebEmailW3C = () => {
    return <div className="article">
        <h2>Web, Email and the W3C – the Good, the Bad, and the Ugly</h2>

        <p className="article-meta">A blog post published on <a href="https://spicerack.co.uk" target="_blank">spicerack.co.uk</a>, 25 January 2016.</p>

        <h3>Introduction</h3>
        <p>In my last article, I wrote about how we can all use third-party technologies to our advantage. The Internet gives all of us the ability to use and contribute to the work of others; as developers, this resource pool can be such a valuable asset.</p>
        <p>It was, perhaps, a little one sided… I’m not usually a negative person, but it is nonetheless important to give fair and constructive criticism. If we want to work within a better tech ecosystem, it’s not helpful to ignore areas that are lacking or could be improved.</p>
        <p>And so, whilst the spirit of cooperation and shared knowledge is alive and well in many developer communities, I’ve decided to focus this piece on the lesser-known forces behind innovation within the industry; Web and e-mail standards, and the W3C.</p>

        <h3>The Good</h3>
        <p>The W3C are moving forward with their iterative improvement of web standards. From personal experience, some of the issues I’ve encountered when developing for Web (some of the gaps in functionality, or quirks of standardisation) are soon to be solved.</p>
        <p>I love SVG 2. As an example, SVG 2 will bring in the move from a circle’s radius being considered an HTML attribute to it being considered a CSS property and, as such, will further unify the two Markup Languages.</p>
        <p>I also like FlexBox. Dealing with positioning and alignment in CSS has always felt, to me at least, as if you’re fighting the system rather than benefitting from it. To have an entirely new layout paradigm on the horizon, with dynamic space allocation at its heart, is an incredibly exciting prospect.</p>

        <h3>The Bad</h3>

        <p>Some have criticised the efforts of the W3C to standardise a ‘Do Not Track’ request. The move was intended as a way of championing user privacy, however (since advertisers and other trackers are under no real obligation to acknowledge DNT) it was rendered largely ineffective. The failure to get digital advertising organisations onside was seen as a significant set back.</p>
        <p>Equally, the W3C have come under criticism for their involvement in the institutionalisation of Digital Rights Management; the proposed standards for Encrypted Media Extensions would enable DRM streamed content to play through HTML5 Video. Organisations such as the Free Software Foundation consider it a restrictive practice, and one that constrains user freedom.</p>

        <h3>The Ugly</h3>

        <p>Of course, a lot of these criticisms are focused on individual decisions, or temporary shortcomings; they will be relatively easy to change. On the other hand, the truly ugly side of the Web was born from a systematic resistance to change.</p>
        <p>There is a deep and systemic problem at the heart of internet usage today. Coincidentally, it is the same deep and systemic problem that has been at the heart of internet usage for over half a decade; internet users continue to use the same software to access e-mail and Web pages, despite their age and nonconformance to standards.</p>
        <p>The lack of consistency with regards to the rendering of HTML and CSS, far from being just mildly irritating to the more obsessive of developers, causes real and quantifiable problems to businesses. The time taken to cater for older Web and e-mail clients (and the lengthy testing processes that follow) all contribute to the final build time of a project, and its total cost.</p>
        <p>The work of the W3C, and others, to innovate and modernise digital standards comes to nothing when over 10% of Web browser users were using IE 8 as of December 2015; a significant proportion of currently used browsers are simply incompatible with the improvements.</p>

        <h3>Conclusion</h3>
        <p>It is an exciting time to be a front-end web developer; every day I’m exploring the pitfalls and shortcomings of the status quo, whilst at the same time eagerly reading through the work-in-progress proposals for some truly fabulous solutions.</p>
        <p>Whilst the Web seems to find a new way to frustrate me everyday, and the time I’ve spent on StackOverflow poring over lists of hacks and workarounds is truly cringe-worthy, it simply makes my aspirations for the future all the more powerful.</p>
        <p>The future is, as always, uncertain. It will probably be a bumpy road. I am, however, quietly optimistic.</p>
    </div>
}
import * as React from "react"

import "./article.scss";

export const AdoptingThirdPartyTechnologies = () => {
    return <div className="article">
        <h2>Adopting Third Party Technologies for the Long Haul</h2>

        <p className="article-meta">A blog post published on <a href="https://spicerack.co.uk" target="_blank">spicerack.co.uk</a>, 13 November 2015.</p>

        <p>For developers, choosing the right third party technologies to use in a web project can be as important for the success of the project as the content the site contains.</p>
        <p>This is especially true for commercial work. The businesses that you work with will likely have standard requirements in terms of security, compatibility, and the lifespan of their finished product; how you decide to approach the project technically will have one of the largest impacts on these considerations over time.</p>
        <p>For most, if not all, developers, the tools and libraries we use are going to be third party. Building up dependencies on other software can feel a lot like putting the success or failure of our projects into the hands of strangers, but it would be unfeasible for the majority of us to do it any other way. We must, therefore, be confident that the people who maintain these external resources will not only continue to do so, but will continue to innovate in a stable manner.</p>
        <p>How, I hear you ask, do we decide what kind of third party technologies to integrate with our web project?</p>
        <p>It is a difficult question; in an ever-changing digital landscape, how can we be sure that the resources we depend on will continue to be there? How can we predict the future and protect our interests?</p>
        <p>The answer is, of course, that we can’t. Unfortunately we must take the risk and make informed decisions based on what we have seen or read about, historically.</p>
        <p>Although the factors affecting a development project’s trajectory can vary, and their ultimate success can only really be determined post-mortem, there are a small number of steps we can take to help manage the risks involved with their adoption:</p>
        <ul>
            <li>Know the market. Before committing to anything in the development process, check out the alternatives. It’s a simple step, but often overlooked. The temptation is to opt for what you’ve used before, and not to look any further.  While this may be preferable in the short term, things can really start gathering dust within the space of three or four years. By giving yourself alternatives, you are injecting competition into the situation; you have the power of choice.</li>
            <li>Don’t double up. There’s a whole list of cliches I could use to describe this step (less is more, two birds; one stone, etc.) but trying to reduce the number of different technologies currently used in your project really can make resource management simpler, and keep your list of dependencies to a minimum. By going with the most versatile tools available to you, putting all your eggs in fewer baskets isn’t necessarily a bad thing.</li>
            <li>
                Go with the professionals. The final, and perhaps the most important, point I’d like to make concerns the group of people who back the resource’s development. Countless articles have been written on the benefits of open source vs. proprietary software, so I’ll try not to cover old ground. All the same, it’s worth noting a relatively recent trend; for-profit corporations maintaining enterprise-standard versions of open source software. In my opinion, this provides the best mix in terms of innovation, speedy bug patches, long term support, and security. A wide range of developers can work on generating new ideas and features, whilst their successes’ open source code can be filtered into a definitive and secure end product with the backing of tech titans. (Notable examples include Google’s Chrome web browser, Facebook’s React javascript library, and Digia’s Qt GUI Framework.)
            </li>
        </ul>
        <p>A final thought; procrastination is an easy space to get into.  Whilst the temptation might be there to kick a few decisions into the long grass, it goes without saying that this really won’t solve anything. Instead, tackle problems intelligently and head on, before they have a chance to fester.  Treat it like homework, suck it up and get it done – the sooner it’s done the quicker you can move onto the fun stuff. We all like the fun stuff.</p>
    </div>
}
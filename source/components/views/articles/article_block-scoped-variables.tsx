import * as React from "react"

import "./article.scss";

export const BlockScopedVariables = () => {
    return <div className="article">
        <h2>Block-scoped Variables, Arrow Functions, and a Healthy Dose of Skepticism</h2>

        <p className="article-meta">A blog post published on <a href="https://medium.com/front-end-weekly" target="_blank">Frontend Weekly</a>, 10 June 2016.</p>

        <h3>Introduction</h3>
        <p>Over the past few months, I’ve taken to using a transpiler for a significant section of my front-end work. Babel (whose strapline is simply “Use next generation JavaScript, today.”) has allowed me to write in ES2015, whilst keeping full compatibility with standard Web browsers.</p>
        <p>The features that using “next generation JavaScript” has placed at my fingertips are really quite exciting. Whilst the number of additions is high, I’ve decided to focus on just two. Block-scoped variables and arrow functions are relatively humble, and yet also unbelievably useful.</p>

        <h3>The Let Keyword</h3>
        <p>Using the let keyword within ES2015 creates a variable whose extent is limited to the execution of its containing block. Whilst block-scoping may sound dry, and incredibly dull, its use has made things easier for me.</p>
        <p>The primary advantages of utilising block-scoping in everyday code is clarity; declaring variables within the blocks in which they are used, rather than generically at the top of functions, results in a more intuitive layout and simpler namespacing.</p>
        <p>In addition, by constraining its lifetime to a smaller subsection of code, the memory used to store a variable’s value may be reallocated faster, therefore freeing up sections of memory. Although this saving is minimal, when the same technique is applied throughout a large program the effect may be amplified.</p>
        <p>Having another option available for scoping has made me think more about the actual purpose of my variables, and where and why I need them. This insight and depth of understanding has contributed to a general improvement in the quality of my code. Not only are there clear technical benefits to utilising block-scoping, but it can also help shape the mindset of individual developers.</p>

        <h3>Arrow Functions</h3>
        <p>Arrow functions are a nifty addition to any JS developer’s toolkit. Whilst at first sight they may seem more like syntactic sugar than substance, arrow functions have proven both distinctive and powerful.</p>
        <p>Far from just a shorthand for regular anonymous functions, arrow functions handle context completely differently; rather than each function invocation having its own this value (determined by where it is called,) they share it with their parent scope.</p>
        <p>One situation where I found arrow functions particularly useful was when I was writing anonymous onClick handlers within React.js component classes; they allowed me to naturally access the methods and properties of the class, rather than those of the Window object. This is effective and useful when writing other callback functions in ES2015.</p>

        <h3>Conclusion</h3>
        <p>The time taken to get to grips with these new technologies was, without a doubt, time well spent. More than simply adding extra strings to my bow, the experience has been genuinely thought provoking.</p>
        <p>Neither the initial decision to use Babel, nor to write in ES2015, were made by me personally; they were changes made by my colleagues on a project we’ve been working on together, and (due to the backwards compatibility of ES2015) these changes were also ones that passed me by, unnoticed, for an embarrassingly long time.</p>
        <p>When I did begin to see additional dependencies, and a few quirks in the JS files, I (as any diligent developer would) did some research. From the outset, the idea of a transpiler felt wrong. Writing relatively unsupported code, that relied on third-party dependencies to run on modern Web browsers, felt instinctively wrong.</p>
        <p>I don’t suppose it would surprise you to say that I didn’t begin writing ES2015 immediately; for me it was a long process of conversion. I can be stubborn. It was an internal battle of attrition; With each and every step I was fighting my own preconceptions, and with each and every step they yielded (eventually) to reason.</p>
        <p>As such, the advantages of this new method of writing JavaScript weren’t ones I noticed retrospectively; from using the let keyword, to arrow functions, I only accepted each new technique once I fully understood its value.</p>
        <p>I’m glad I now use ES2015. I find my work faster to produce, and easier to read. Its practical advantages outweigh my innate misgivings over Babel. Strangely enough however, I’m also glad I approached it in the way I did; je ne regrette rien. It may not seem the most conventional of approaches, especially in an industry that is so focused on being modern and cutting-edge, but a healthy dose of skepticism seems to help shield us from short-lived fads and soon-to-be obsolete practices.</p>
        <p>"Guilty until proven innocent" may sound like an unfair principle, but I find the term “whitelisting” to be infinitely more palatable.</p>
    </div>
}
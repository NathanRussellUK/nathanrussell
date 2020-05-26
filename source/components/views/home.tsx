import * as React from "react";
import { Features } from "../features";
import { BlockLinks } from "../block-links";
import { featureList } from "../../feature-list";
import { blockLinkList } from "../../block-link-list";
import { articlesList } from "./articles/articles-list";
import { SlideShow } from "../slide-show";

import "../../theme/column-layout.scss";
import "./home.scss";

const SpicerackSlides: SlideShow.Props["slides"] = [
  {
    caption: "Foresight Factory - WYSIWYG content builder",
    image: { src: "/images/slide_sr_01.png", alt: "Foresight Factory" },
    id: "foresight-factory",
  },
  {
    caption: "BNP Paribas - Brochureware",
    image: { src: "/images/slide_sr_02.png", alt: "BNP Paribas" },
    id: "bnp-paribas",
  },
  {
    caption: "Marc Jacobs Decadence - HTML Email",
    image: { src: "/images/slide_sr_03.png", alt: "Marc Jacobs Decadence" },
    id: "marc-jacobs-decadence",
  },
];

const RocketmakersSlides: SlideShow.Props["slides"] = [
  {
    caption: "Pure Planet  -  iOS & Android apps, marketing site, APIs",
    image: { src: "/images/slide_rm_01.png", alt: "Pure Planet" },
    id: "pure-planet",
  },
  {
    caption: "Fireball - Web app",
    image: { src: "/images/slide_rm_02.png", alt: "Fireball" },
    id: "fireball",
  },
  {
    caption: "PDMS Athletes - iOS & Android Apps, API",
    image: { src: "/images/slide_rm_03.png", alt: "PDMS Athletes App" },
    id: "pdms-athletes",
  },
];

export const Home = () => (
  <div className="column-layout">
    <div className="row">
      <div className="column" id="features">
        <Features features={featureList} />
      </div>
      <div className="column" id="intro">
        <p>
          A professional software/Web developer, passionate about working with
          the latest and greatest technology.
        </p>
        <p>
          Taking websites, mobile apps, and APIs from initial design through to
          support has given me strong and foundational knowledge of all aspects
          of the development process.
        </p>
        <BlockLinks blockLinks={blockLinkList} />
      </div>
    </div>
    <div className="row">
      <div className="column job">
        <img
          alt="Rocketmakers Logo"
          className="employer-logo"
          src="/images/rocketmakers.svg"
        />
        <h2>
          <i className="fas fa-briefcase"></i>
          Developer
        </h2>
        <p className="dates">2016 - current</p>
        <p>
          In the 3+ years I've been working at Rocketmakers, our emphasis has
          always been on innovation and code quality.
        </p>
        <p>
          I have lead the development of key components of our company-wide
          stack, including in state management and asynchronous flows on the
          client. I have also played a proactive role in quality assurance,
          helping to define and document testing and code review processes.
        </p>
      </div>
      <div className="column feature rocketmakers">
        <SlideShow.Component slides={RocketmakersSlides} />
      </div>
    </div>
    <div className="row">
      <div className="column job">
        <img
          alt="Spicerack Logo"
          className="employer-logo"
          src="/images/spicerack.png"
        />
        <h2>
          <i className="fas fa-briefcase"></i>
          Apprentice Developer
        </h2>
        <p className="dates">2015 - 2016</p>
        <p>
          During my apprenticeship, my work required good communication, working
          with backend developers and designers, and provided me with an
          introduction to repository and coding conventions.
        </p>
        <p>
          In addition to my duties as a developer, I was allocated time for
          pursuing independent study. I read through programming documentation
          and developers’ blog posts, worked through practical tutorials, and
          used the skills I’d learnt to produce original content.
        </p>
      </div>
      <div className="column feature spicerack">
        <SlideShow.Component slides={SpicerackSlides} />
      </div>
    </div>
    <div className="column full-width" id="articles">
      <h2>Articles</h2>
      <BlockLinks blockLinks={articlesList} />
    </div>
  </div>
);

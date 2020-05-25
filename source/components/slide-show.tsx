import * as React from "react";

import "./slide-show.scss";
import { useStages } from "../hooks/stages";

namespace Slide {
  export type Props = {
    caption: string;
    image: { src: string; alt: string };
    id: string;
  };

  export const Component: React.FC<Props> = (props) => (
    <div className={`slide slide-${props.id}`}>
      <img
        className="slide-image"
        src={props.image.src}
        alt={props.image.alt}
      ></img>
      {!!props.caption && <div className="slide-caption">{props.caption}</div>}
    </div>
  );
}

export namespace SlideShow {
  export type Props = {
    className?: string;
    slides: Slide.Props[];
  };
  export const Component: React.FC<Props> = (props) => {
    const { goToPreviousStage, goToNextStage, currentStage } = useStages(
      props.slides
    );

    return (
      <div
        className={`slide-show${props.className ? " " + props.className : ""}`}
      >
        <button onClick={goToPreviousStage} aria-label="Previous">
          <i className="fas fa-chevron-left"></i>
        </button>
        <Slide.Component {...currentStage} key={currentStage.id} />
        <button onClick={goToNextStage} aria-label="Next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  };
}

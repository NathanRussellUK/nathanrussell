import * as React from "react";

import "./slide-show.scss";
import { useStages } from "../hooks/stages";

export type SlideDetails = {
  caption: string;
  image: { src: string; alt: string };
  id: string;
};

namespace Slide {
  export type Props = SlideDetails & {
    active: boolean;
  };

  export const Component: React.FC<Props> = (props) => (
    <div className={`slide slide-${props.id}`} data-active={props.active}>
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
    slides: SlideDetails[];
  };
  export const Component: React.FC<Props> = (props) => {
    const { goToPreviousStage, goToNextStage, currentStage } = useStages(
      props.slides
    );

    const slides = React.useMemo(() => {
      return props.slides.map((slide) => (
        <Slide.Component
          {...slide}
          key={slide.id}
          active={slide.id === currentStage.id}
        />
      ));
    }, [props.slides, currentStage]);

    return (
      <div
        className={`slide-show${props.className ? " " + props.className : ""}`}
      >
        <button onClick={goToPreviousStage} aria-label="Previous">
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="slide-container">{slides}</div>
        <button onClick={goToNextStage} aria-label="Next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  };
}

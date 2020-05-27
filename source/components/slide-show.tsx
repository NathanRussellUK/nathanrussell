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
    state?: "previous" | "current" | "next";
    className?: string;
  };

  export const Component: React.FC<Props> = (props) => (
    <div
      className={`slide slide-${props.id}${
        props.className ? " " + props.className : ""
      }`}
      data-state={props.state}
    >
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
    // slide transition duration (s)
    const duration = 0.6;

    const {
      goToPreviousStage,
      goToNextStage,
      states,
      direction,
      isPending,
    } = useStages(props.slides, duration);

    const slides = props.slides.map((slide, index) => (
      <Slide.Component {...slide} state={states[index]} key={slide.id} />
    ));

    return (
      <>
        <div
          className={`slide-show${
            props.className ? " " + props.className : ""
          }`}
          data-direction={direction}
        >
          <button
            onClick={goToPreviousStage}
            aria-label="Previous"
            disabled={isPending}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="slide-container">{slides}</div>
          <button
            onClick={goToNextStage}
            aria-label="Next"
            disabled={isPending}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <style>
          {`.slide-show .slide {
      --duration: ${duration}s
              }`}
        </style>
      </>
    );
  };
}

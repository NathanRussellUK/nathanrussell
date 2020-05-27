import * as React from "react";

type Direction = "forward" | "backward";

const halt = (ms: number) => {
  return new Promise((res) => {
    setTimeout(() => res(), ms);
  });
};

export const useStages = <Stage>(stages: Stage[], duration: number) => {
  const [currentIndex, goToStage] = React.useState(0);
  const [direction, setDirection] = React.useState<Direction>("forward");
  const [isPending, setIsPending] = React.useState(false);

  const previousStageIndex =
    currentIndex === 0 ? stages.length - 1 : currentIndex - 1;

  const nextStageIndex =
    currentIndex === stages.length - 1 ? 0 : currentIndex + 1;

  const handlePending = async () => {
    setIsPending(true);
    await halt(duration * 1000);
    setIsPending(false);
  };

  const goToPreviousStage = () => {
    goToStage(previousStageIndex);
    setDirection("backward");
    handlePending();
  };

  const goToNextStage = () => {
    goToStage(nextStageIndex);
    setDirection("forward");
    handlePending();
  };

  const states = stages.map((stage, index) => {
    switch (index) {
      case previousStageIndex:
        return "previous";
      case currentIndex:
        return "current";
      case nextStageIndex:
        return "next";
      default:
        return null;
    }
  });

  return {
    goToPreviousStage,
    goToNextStage,
    states,
    direction,
    isPending,
  };
};

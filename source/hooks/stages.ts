import * as React from "react";

type Direction = "forward" | "backward";

export const useStages = <Stage>(stages: Stage[]) => {
  const [currentIndex, goToStage] = React.useState(0);

  const goToPreviousStage = React.useCallback(() => {
    if (currentIndex === 0) {
      goToStage(stages.length - 1);
    } else {
      goToStage(currentIndex - 1);
    }
  }, [currentIndex, stages.length]);

  const goToNextStage = React.useCallback(() => {
    if (currentIndex === stages.length - 1) {
      goToStage(0);
    } else {
      goToStage(currentIndex + 1);
    }
  }, [currentIndex, stages.length]);

  const currentStage = stages[currentIndex];

  return {
    goToPreviousStage,
    goToNextStage,
    currentStage,
    currentIndex,
  };
};

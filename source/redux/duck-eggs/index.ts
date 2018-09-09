import { Action } from "redux";
import { Effect } from "redux-saga";
import { randomNumber } from "./random-number";

// Add your duck eggs here to hatch them...
export const userDuckEggs = {
};

export const systemDuckEggs = {
  randomNumber
};

// The shape that all duck files should export so as they are hatched / included automatically in your app's redux environment
export interface DuckEgg<State> {
  reducer: (state: State, action: Action) => State;
  rootSaga?: () => IterableIterator<Effect>;
}

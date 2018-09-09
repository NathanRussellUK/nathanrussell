import { Action, Reducer } from "redux";

// Defines your reset user state action
const resetUserStateActionType = "RESET_USER_STATE";
export const resetUserState = () => ({ type: resetUserStateActionType });

// Resets all your user state to its default values if the action is dispatched
export const resetUserStateReducerFactory = <State>(subreducer: Reducer<State>): Reducer<State> => {
  return (state: State, action: Action) => subreducer(action.type === resetUserStateActionType ? undefined : state, action);
};

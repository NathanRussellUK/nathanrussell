import { Action, combineReducers, ReducersMapObject, AnyAction, Reducer } from "redux"
import { systemDuckEggs, userDuckEggs } from "./duck-eggs/index";
import { resetUserStateReducerFactory } from "./reset-user-state";

const getDuckEggReducers = <S>(duckEggs) => Object.keys(duckEggs).reduce(
  (memo, key) => {
    const duckEgg = duckEggs[key]
    // "Maps" your duck eggs into a dictionary of reducers
    return { ...memo, [key]: duckEgg.reducer }
  },
  {}
) as ReducersMapObject<S, AnyAction>

namespace User {
  // Defines your user state type automatically, using the values returned by your duck reducers
  // export type UserState = {
  //   [P in keyof typeof userDuckEggs]: ReturnType<typeof userDuckEggs[P]["reducer"]>
  // }

  export type UserState = {}

  const reducers = getDuckEggReducers<UserState>(userDuckEggs)

  // Combines all your duck reducers into a single reducer, wrapping it in the reset user state function
  export const reducer = (state: UserState, action: Action): UserState => {
    if (!Object.keys(reducers).length) {
      return ((s = {}, a) => s) as any
    }
    const resetUserStateReducer = resetUserStateReducerFactory(combineReducers(reducers))
    return resetUserStateReducer(state, action)
  }
}

// The same as with user state, without reverting state on logout
namespace System {
  export type SystemState = {
    [P in keyof typeof systemDuckEggs]: ReturnType<typeof systemDuckEggs[P]["reducer"]>
  }
  const reducers = getDuckEggReducers<SystemState>(systemDuckEggs)
  export const reducer = (state: SystemState, action: Action): SystemState => {
    if (!Object.keys(reducers).length) {
      return ((s = {}, a) => s) as any
    }
    return combineReducers(reducers)(state, action)
  }}

// The single interface for your redux store's entire state
export interface State {
  user: User.UserState;
  system: System.SystemState;
}

// The single reducer for your redux store's entire state
export const reducer = combineReducers({
  system: System.reducer,
  user: User.reducer
})

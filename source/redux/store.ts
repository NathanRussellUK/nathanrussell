import { createStore, AnyAction } from "redux";
import { State, reducer } from "./state"
import { getAppliedMiddleware } from "./middlewares";

export const createApplicationStore = () => createStore<State, AnyAction, any, any>(reducer, getAppliedMiddleware());
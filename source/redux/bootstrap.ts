import { createStore, AnyAction } from "redux";
import { State, reducer } from "./state";
import { getAppliedMiddleware } from "./middlewares";
import { createHux } from "hux";
import { runAllDuckEggSagas } from "./sagas";

const store = createStore<State, AnyAction, any, any>(reducer, getAppliedMiddleware());
export const hux = createHux(store);

runAllDuckEggSagas();
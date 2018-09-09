import { applyMiddleware, compose, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

export const getAppliedMiddleware = () => {
  if (typeof window !== "undefined") {
    const devTools = window["devToolsExtension"] || (() => f => f);

    return compose(applyMiddleware(...middlewares), devTools());
  }

  return applyMiddleware(...middlewares);
};

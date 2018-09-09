import { systemDuckEggs, userDuckEggs } from "./duck-eggs/index";
import { sagaMiddleware } from "./middlewares";

export const runDuckEggSagas = duckEggs => {
  for (const key in duckEggs) {
    const duckEgg = duckEggs[key];
    // Runs the root sagas for all your duck eggs...
    if (duckEgg.rootSaga) {
      sagaMiddleware.run(duckEgg.rootSaga);
    }
  }
};

export const runAllDuckEggSagas = () => {
  runDuckEggSagas(systemDuckEggs);
  runDuckEggSagas(userDuckEggs);
};

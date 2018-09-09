import { put, takeEvery } from "redux-saga/effects";
import { actionCreatorFactory, ActionUnion } from "../action-creators";

export const getRandomNumber = actionCreatorFactory("getRandomNumber")();

export const setRandomNumber = actionCreatorFactory("setRandomNumber")<{payload: number}>();

const actionCreatorRefs = {
    getRandomNumber,
    setRandomNumber,
};

type DuckActionUnion = ActionUnion<typeof actionCreatorRefs>;

export const reducer = (state = null, action: DuckActionUnion) => {
    switch (action.type) {
        case "setRandomNumber": {
            return action.payload
        }
        case "getRandomNumber":
        default: {
            return state
        }
    }
}

export function* getRandomNumberSaga(action: ReturnType<typeof getRandomNumber.create>) {
    yield put(setRandomNumber.create({ payload: Math.random() }));
}
  
export function* rootSaga() {
    yield takeEvery(getRandomNumber.type, getRandomNumberSaga);
}

export const randomNumber = {
    reducer,
    rootSaga
}
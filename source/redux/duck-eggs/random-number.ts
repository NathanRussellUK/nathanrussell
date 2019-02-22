import { put, takeEvery, call } from "redux-saga/effects";
import { actionCreatorFactory, ActionUnion } from '../action-creators';
import { delay } from "redux-saga";

export const getRandomNumber = actionCreatorFactory("getRandomNumber")();

const setRandomNumber = actionCreatorFactory("setRandomNumber")<{ payload: number }>();

export const resetRandomNumber = actionCreatorFactory("resetRandomNumber")();

const actionCreatorRefs = {
    getRandomNumber,
    setRandomNumber,
    resetRandomNumber
};

type DuckActionUnion = ActionUnion<typeof actionCreatorRefs>;

type State = {
    status?: "pending" | "success";
    data?: number;
};

const defaultState: State = {};

export const reducer = (state: State = defaultState, action: DuckActionUnion): State => {
    switch (action.type) {
        case "getRandomNumber": {
            return { status: "pending" };
        }
        case "setRandomNumber": {
            return {
                status: "success",
                data: action.payload
            };
        }
        case "resetRandomNumber": {
            return {

            }
        }
        default: {
            return state;
        }
    }
};

export function* getRandomNumberSaga(action: ReturnType<typeof getRandomNumber.create>) {
    yield call(delay, 4000);
    yield put(setRandomNumber.create({ payload: Math.random() }));
};

export function* rootSaga() {
    yield takeEvery(getRandomNumber.type, getRandomNumberSaga);
};

export const randomNumber = {
    reducer,
    rootSaga,
    actions: actionCreatorRefs
};
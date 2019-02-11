import { put, takeEvery } from "redux-saga/effects"
import { actionCreatorFactory, ActionUnion } from "../action-creators"
import { DuckEgg } from "."

export const getRandomNumber = actionCreatorFactory("getRandomNumber")()

export const setRandomNumber = actionCreatorFactory("setRandomNumber")<{payload: number}>()

const actions = {
    getRandomNumber,
    setRandomNumber,
}

type DuckActionUnion = ActionUnion<typeof actions>

type State = number

export const reducer = (state: State = null, action: DuckActionUnion): State => {
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

export const randomNumber: DuckEgg<State> = {
    reducer,
    rootSaga,
    actions
}
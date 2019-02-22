import * as React from "react";
import * as Redux from "redux";
// @ts-ignore
import { __RouterContext } from "react-router-dom";

import { userDuckEggs, systemDuckEggs } from './duck-eggs/index';
import { State } from './state';


export const HooksContext = React.createContext<Redux.Store<State>>(null);

const useDispatch = <CreatedAction extends Redux.AnyAction, ActionCreatorArgs extends any[]>(actionCreator: (...actionCreatorArgs: ActionCreatorArgs) => CreatedAction) => {
    const { dispatch } = React.useContext(HooksContext);

    return function(...actionCreatorArgs: ActionCreatorArgs) { return dispatch<CreatedAction>(actionCreator(...actionCreatorArgs)); }
}



const useSelector = <S>(selector: (state: State) => S) : S => {
    const { subscribe, getState } = React.useContext(HooksContext);

    const select = () => selector(getState());
    const initial = select();

    const [value, update] = React.useState(initial);

    const listener = () => {
        const next = select();

        if (next !== value) {
            update(next);
        }
    };

    React.useEffect(() => subscribe(listener));

    return value;
}



type TUserDuckHooks = {
    [P in keyof typeof userDuckEggs]: {
        useState: () => ReturnType<typeof userDuckEggs[P]["reducer"]>,
        // useDispatcher: {[DP in keyof typeof userDuckEggs[P]["actions"]]: () => typeof userDuckEggs[P]["actions"][DP]["create"] }
        useDispatcher: {[DP in keyof typeof userDuckEggs[P]["actions"]]: () => any }
    }
}



type TSystemDuckHooks = {
    [P in keyof typeof systemDuckEggs]: {
        useState: () => ReturnType<typeof systemDuckEggs[P]["reducer"]>,
        // useDispatcher: {[DP in keyof typeof systemDuckEggs[P]["actions"]]: () => typeof systemDuckEggs[P]["actions"][DP]["create"] }
        useDispatcher: {[DP in keyof typeof systemDuckEggs[P]["actions"]]: () => any }
    }
}

export const duckHooks = {
    user: Object.keys(userDuckEggs).reduce<TUserDuckHooks>((reduction, incoming: keyof typeof userDuckEggs) => ({
        ...reduction,
        [incoming]: {
            useState: () => useSelector(state => state.user[incoming]),
            useDispatcher: userDuckEggs[incoming].actions ?
                Object.keys(userDuckEggs[incoming].actions).reduce<{[DP in keyof typeof userDuckEggs[typeof incoming]["actions"]]: () => any}>((actionReduction, actionIncoming) => ({
                    ...actionReduction,
                    [actionIncoming]: () => useDispatch((...data) => userDuckEggs[incoming].actions[actionIncoming].create(...data))
                }), {} as any)
                :
                {} as any
        }
    }), {} as any),
    
    system: Object.keys(systemDuckEggs).reduce<TSystemDuckHooks>((reduction, incoming: keyof typeof systemDuckEggs) => ({
        ...reduction,
        [incoming]: {
            useState: () => useSelector(state => state.system[incoming]),
            useDispatcher: systemDuckEggs[incoming].actions ?
                Object.keys(systemDuckEggs[incoming].actions).reduce<{[DP in keyof typeof systemDuckEggs[typeof incoming]["actions"]]: () => any}>((actionReduction, actionIncoming) => ({
                    ...actionReduction,
                    [actionIncoming]: () => useDispatch((...data) => systemDuckEggs[incoming].actions[actionIncoming].create(...data))
                }), {} as any)
                :
                {} as any
        }
    }), {} as any)
}
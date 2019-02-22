import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { State } from "../redux/state";
import { getRandomNumber } from "../redux/duck-eggs/random-number";
import { duckHooks } from "../redux/hooks";

export const RandomNumber: React.FunctionComponent = props => {
    const getRandomNumber = duckHooks.system.randomNumber.useDispatcher.getRandomNumber();

    const randomNumber = duckHooks.system.randomNumber.useState();

    // the second parameter specifies which props changing should trigger the effect to run again;
    // as no props are provided, the effect will only run once, on the initial render
    // this is the equivalent of componentWillMount
    React.useEffect(() => {getRandomNumber({})}, []);

    return <div className="random-number">
        <p>Random Number: {randomNumber || "Not yet fetched..."}</p>
    </div>;
}

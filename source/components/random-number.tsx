import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { State } from "../redux/state";
import { getRandomNumber } from '../redux/duck-eggs/random-number';
import { duckHooks } from "../redux/hooks";

export const RandomNumber: React.FunctionComponent = props => {
    const getRandomNumber = duckHooks.system.randomNumber.useDispatcher.getRandomNumber();

    const randomNumber = duckHooks.system.randomNumber.useState();

    // the second parameter specifies which props changing should trigger the inner function to be called again;
    const buttonContent = React.useMemo(() => {
        switch (randomNumber.status) {
            case "pending": {
                return ""
            }

            case "success": {
                return ""
            }

            default: {
                return "Start!"
            }
        }
    }, [randomNumber.status])

    const displayContent = React.useMemo(() => {
        switch (randomNumber.status) {
            case "pending": {
                return <div className="hold">One sec!</div>
            }

            case "success": {
                return <div className="result">{`${randomNumber.data}!`}</div>
            }

            default: {
                return <div className="prompt">Get random number?</div>
            }
        }
    }, [randomNumber.status])

    return <div className="random-number">
        <div className="display">
            {displayContent}
        </div>
        <button onClick={() => { getRandomNumber({}) }}>
            {buttonContent}
        </button>
    </div>;
}

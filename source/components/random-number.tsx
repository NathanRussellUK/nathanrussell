import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { State } from "../redux/state";
import { getRandomNumber } from '../redux/duck-eggs/random-number';
import { duckHooks } from '../redux/hooks';

export const RandomNumber: React.FunctionComponent = props => {
    const getRandomNumber = duckHooks.system.randomNumber.useDispatcher.getRandomNumber();
    const resetRandomNumber = duckHooks.system.randomNumber.useDispatcher.resetRandomNumber();

    const randomNumber = duckHooks.system.randomNumber.useState();

    const buttonContent = React.useMemo(() => {
        switch (randomNumber.status) {
            case "pending": {
                return <i className="fas fa-spinner fa-spin" />
            }

            case "success": {
                return <>Clear <i className="far fa-check-circle" /></>
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

    return <div className="random-number" data-status={randomNumber.status}>
        <div className="display">
            {displayContent}
        </div>
        <button
            disabled={randomNumber.status === "pending"}
            onClick={() => {
                !randomNumber.status ?
                    getRandomNumber({})
                    :
                    resetRandomNumber({})
            }}
        >
            {buttonContent}
        </button>
    </div>;
}

import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { State } from "../redux/state";
import { getRandomNumber } from '../redux/duck-eggs/random-number';
import { duckHooks } from '../redux/hooks';

import "./random-number.scss";

export const RandomNumber: React.FunctionComponent = props => {
    const getRandomNumber = duckHooks.system.randomNumber.useDispatcher.getRandomNumber();
    const resetRandomNumber = duckHooks.system.randomNumber.useDispatcher.resetRandomNumber();

    const randomNumber = duckHooks.system.randomNumber.useState();

    const resultInput = React.useRef<HTMLInputElement>(null);

    const buttons = React.useMemo(() => {
        switch (randomNumber.status) {
            case "pending": {
                return <button disabled>
                    <i className="fas fa-spinner fa-spin" />
                </button>
            }

            case "success": {
                return <>
                    <button onClick={() => {
                        resultInput.current.select();
                        document.execCommand("copy");
                    }} title="Copy number to clipboard">
                        Copy <i className="far fa-copy" />
                    </button>
                    <button onClick={() => { resetRandomNumber({}) }}>
                        Reset <i className="far fa-check-circle" />
                    </button>
                </>
            }

            default: {
                return <button onClick={() => { getRandomNumber({}) }}>
                    Start <i className="far fa-play-circle" />
                </button>
            }
        }
    }, [randomNumber.status])

    const displayContent = React.useMemo(() => {
        switch (randomNumber.status) {
            case "pending": {
                return <div className="hold">One sec!</div>
            }

            case "success": {
                return <input
                    type="text"
                    className="result"
                    ref={resultInput}
                    value={randomNumber.data}
                />
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
        <div className="buttons">
            {buttons}
        </div>
    </div>;
}

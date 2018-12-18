import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { State } from "../redux/state";
import { getRandomNumber } from "../redux/duck-eggs/random-number";

export namespace RandomNumber {
    interface Props {
        randomNumber: State["system"]["randomNumber"];
        getRandomNumber: () => void;
    }

    const mapStateToProps = (state: State) => ({
        randomNumber: state.system.randomNumber
    });
    
    const mapDispatchToProps = (dispatch: Dispatch) => ({
        getRandomNumber: () => dispatch(getRandomNumber.create({}))
    });

    export const Component = connect(mapStateToProps, mapDispatchToProps)
        ((props: Props) => {
            // the second parameter specifies which props changing should trigger the effect to run again;
            // as no props are provided, the effect will only run once, on the initial render
            // this is the equivalent of componentWillMount
            React.useEffect(props.getRandomNumber, []);

            return <div className="random-number">
                <p>Random Number: {props.randomNumber}</p>
            </div>;
        });
}

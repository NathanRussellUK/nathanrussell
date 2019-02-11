import * as React from "react"

import { hux } from "../../redux/bootstrap";
import { State } from "../../redux/state";
import { getRandomNumber } from "../../redux/duck-eggs/random-number";
import { useEffect } from "react";

export const RandomNumber: React.FunctionComponent = () => {
    const randomNumber = hux.useSelector((state: State) => state.system.randomNumber)
    
    useEffect(
        () => { debugger; hux.useDispatch(getRandomNumber.create)({}) }, 
        []
    )

    return <div>
        <h2>Random Number</h2>
        <pre>
            Number: {randomNumber || "Not fetched!"}
        </pre>
    </div>
}

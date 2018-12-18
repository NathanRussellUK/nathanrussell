import React from "react";

export const Counter = () => {
    // adding state to your functional components, using some sort of wizard magick
    // pass in initial state, and the function returns a tuple of the current state and a setter
    const [counter, setCounter] = React.useState<number>(0);

    return <div className="counter">
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
    </div>
}
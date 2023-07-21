import React, { useState } from "react";
import './styles.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        count >= 1 && setCount(count - 1);
    }

    return (
        <div className="container">
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {count > 10 && <p id="label">Count is too high!</p>}
        </div>
    )
}
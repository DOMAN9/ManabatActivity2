import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3> I am planning to stay for {count} days</h3>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Restart</button>
        </div>

    );
}

export default Counter;
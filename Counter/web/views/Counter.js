import React from 'react';

export default () => ({
    counter = 0,
    onUp =() => null,
    onDown =() => null,
    onToggle =() => null,
}) => {
    return <div>
        <div>Counter: {counter}</div>

        <button onClick={onUp}>
            <span>up</span>
        </button>

        <button onClick={onDown}>
            <span>down</span>
        </button>

        <button onClick={onToggle}>
            <span>toggle</span>
        </button>
    </div>;
}
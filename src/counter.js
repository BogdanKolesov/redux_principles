import React from 'react'


const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div>
            <h1>0</h1>
            <button onClick={dec}>Dec</button>
            <button onClick={inc}>Inc</button>
            <button onClick={rnd}>Random</button>
        </div>
    )
}

export default Counter;
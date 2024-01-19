import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setFirstValue,
    setSecondValue,
    add,
    subtract,
    multiply,
    divide
} from '../Action/CalculatorAction'
const Calculator = () => {
    const dispatch = useDispatch();
    const { firstValue, secondValue, result } = useSelector((state) => state);

    return (
        <div>
            <h2>Calculator</h2>
            <div>
                <label htmlFor="">First Value</label>
                <input
                    type="text"
                    value={firstValue}
                    onChange={(e) => dispatch(setFirstValue(e.target.value))}
                    placeholder="Enter the first number"
                /><br/><br/>
                <label htmlFor="">Second Value</label>
                <input
                    type="text"
                    value={secondValue}
                    onChange={(e) => dispatch(setSecondValue(e.target.value))}
                    placeholder="Enter the second number"
                />
            </div>
            <div><br/><br/>
                <button className='btn btn-success' onClick={() => dispatch(add())}>Addition</button>&nbsp;&nbsp;
                <button className='btn btn-info' onClick={() => dispatch(subtract())}>Minus</button>&nbsp;&nbsp;
                <button className='btn btn-warning' onClick={() => dispatch(multiply())}>multiply</button>&nbsp;&nbsp;
                <button className='btn btn-primary' onClick={() => dispatch(divide())}>Division</button>
            </div><br/>
            <div>
                <h3>Result: {result}</h3>
            </div>
        </div>
    );
};

export default Calculator;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, subtract, multiply, divide } from '../Action/CalculatorAction';

const Calculator = () => {
    const [value, setValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [operator, setOperator] = useState('+');
    const dispatch = useDispatch();
    const result = useSelector((state) => state.result);

    const handleCalculate = () => {
        const operand = parseFloat(value);
        const secondOperand = parseFloat(secondValue);

        if (!isNaN(operand) && !isNaN(secondOperand)) {
            let calculatedResult;

            switch (operator) {
                case '+':
                    calculatedResult = operand + secondOperand;
                    dispatch(add(calculatedResult));
                    break;
                case '-':
                    calculatedResult = operand - secondOperand;
                    dispatch(subtract(calculatedResult));
                    break;
                case '*':
                    calculatedResult = operand * secondOperand;
                    dispatch(multiply(calculatedResult));
                    break;
                case '/':
                    calculatedResult = operand / secondOperand;
                    dispatch(divide(calculatedResult));
                    break;
                default:
                    break;
            }

            setValue('');
            setSecondValue('');
        }
    };

    return (
        <div>
            <h2>Calculator</h2>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter the first number"
                />
                <input
                    type="text"
                    value={secondValue}
                    onChange={(e) => setSecondValue(e.target.value)}
                    placeholder="Enter the second number"
                />
            </div>
            <div>
                <button onClick={() => setOperator('+')}>+</button>
                <button onClick={() => setOperator('-')}>-</button>
                <button onClick={() => setOperator('*')}>*</button>
                <button onClick={() => setOperator('/')}>/</button>
            </div>
            <div>
                <button onClick={handleCalculate}>=</button>
            </div>
            <div>
                <h3>Result: {result}</h3>
            </div>
        </div>
    );
};

export default Calculator;
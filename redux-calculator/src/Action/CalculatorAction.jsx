export const add = (operand) => ({
    type: 'ADD',
    payload: operand
});

export const subtract = (operand) => ({
    type: 'SUBTRACT',
    payload: operand
});

export const multiply = (operand) => ({
    type: 'MULTIPLY',
    payload: operand
});

export const divide = (operand) => ({
    type: 'DIVIDE',
    payload: operand
});
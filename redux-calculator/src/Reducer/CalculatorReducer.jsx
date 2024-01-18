const initialState = {
    result: 0
};

const CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, result: action.payload };
        case 'SUBTRACT':
            return { ...state, result: action.payload };
        case 'MULTIPLY':
            return { ...state, result: action.payload };
        case 'DIVIDE':
            return { ...state, result: action.payload };
        default:
            return state;
    }
};

export default CalculatorReducer;
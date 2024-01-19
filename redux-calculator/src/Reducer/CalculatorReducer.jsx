const initialState = {
    firstValue:0,
    secondValue:0,
    result:0,
};

const CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FIRST_VALUE':
            return { ...state, firstValue: parseFloat(action.payload) || 0 };

        case 'SET_SECOND_VALUE':
            return { ...state, secondValue:parseFloat(action.payload) || 0 };

        case 'ADD_VALUES':
            return { ...state, result: state.firstValue + state.secondValue};

        case 'SUBTRACT_VALUES':
            return { ...state, result: state.firstValue - state.secondValue};

        case 'MULTIPLY_VALUES':
            return{ ...state, result: state.firstValue * state.secondValue}

        case 'DIVIDE_VALUES':
            return{ ...state, result: state.firstValue / state.secondValue}
            
        default:
            return state;
    }
};

export default CalculatorReducer;
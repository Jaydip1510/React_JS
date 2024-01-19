export const setFirstValue = (value) => ({
    type:"SET_FIRST_VALUE",
    payload: value,
});

export const setSecondValue = (value) => ({
    type:"SET_SECOND_VALUE",
    payload: value,
});

export const  add = () => ({ 
    type:'ADD_VALUES',
});

export const subtract = () => ({
    type:'SUBTRACT_VALUES',
})

export const multiply = () => ({
    type:'MULTIPLY_VALUES',
});

export const divide = () => ({
    type:'DIVIDE_VALUES',
});
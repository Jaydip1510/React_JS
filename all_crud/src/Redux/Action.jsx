export const addItem = (val) => ({
    type:"AddData",
    payload: val
})

export const removeItem = (val) => ({
    type:"RemoveData",
    payload: val
});

export const updateItem = (val) => ({
    type:"UpdateData",
    payload: val
});
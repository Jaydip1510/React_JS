export const addData = (value) => ({
     type:"Add_Item",
     payload : value
})

export const removeData = (value) => ({
    type:"Remove_Item",
    payload:value,
});
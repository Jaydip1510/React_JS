export const addData = (val) => ({
    type:"Add_User",
    payload:val,

})

export const deleteData = (val) => ({
    type:"DELETE_DATA",
    payload:val,
})

export const updateData = (val) => ({
    type:"UPDATE_DATA",
    payload:val,
})
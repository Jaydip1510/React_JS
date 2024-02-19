export const addData = (val) => ({
      type:"Add_Item",
      payload: val
})

export const removeData = (val) => ({
      type:"Remove_Item",
      payload: val
});
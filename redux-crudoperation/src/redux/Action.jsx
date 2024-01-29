export const AddData = (dt) => ({
       type:"addData",
       payload:dt
});

export const DeleteData = (id) => ({
       type:"deleteData",
       payload:id
});

export const UpdateData = (id) => ({
      type:"updateData",
      payload:id
});
import React from 'react';

const EditModal = ({ img, updatedImg, setUpdatedImg, handleUpdate }) => {
  return (
    <div>
      <h2>Edit Image</h2>
      <img src={img} alt="edit-img" height={"150px"} width={"200px"} />
      <input
        type="file"
        onChange={(e) => setUpdatedImg(e.target.files[0])}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => setUpdatedImg(null)}>Cancel</button>
    </div>
  );
};

export default EditModal;
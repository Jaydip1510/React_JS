import React, { useEffect, useState } from 'react';
import { imageDb } from '../firebase/Dbfirebase';
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  deleteObject,
} from 'firebase/storage';
import { v4 } from 'uuid';
import EditModal from './EditModel';

function Demo() {
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);
  const [editImg, setEditImg] = useState(null);
  const [updatedImg, setUpdatedImg] = useState(null);

  const handleClick = async () => {
    if (img !== null) {
      const imgRef = ref(imageDb, v4());
      await uploadBytes(imgRef, img);
      const url = await getDownloadURL(imgRef);
      setImgUrl((prevUrls) => [...prevUrls, url]);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await listAll(ref(imageDb));
        const urls = await Promise.all(images.items.map(getDownloadURL));
        setImgUrl(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const deleteData = async (id) => {
    const imgRef = ref(imageDb, id);
    await deleteObject(imgRef);
    setImgUrl((prevUrls) => prevUrls.filter((url) => url !== id));
  };

  const setEditImage = (url) => {
    setEditImg(url);
  };

  const handleUpdate = async () => {
    if (updatedImg !== null && editImg !== null) {
      const imgRef = ref(imageDb, editImg);
      await deleteObject(imgRef); 
      await uploadBytes(imgRef, updatedImg); 
      const url = await getDownloadURL(imgRef);
      setImgUrl((prevUrls) =>
        prevUrls.map((prevUrl) => (prevUrl === editImg ? url : prevUrl))
      );
      setEditImg(null); 
      setUpdatedImg(null); 
    }
  };

  return (
    <div>
      <input type='file' onChange={(e) => setImg(e.target.files[0])} />
      <br />
      <br />
      <button onClick={handleClick}>Upload</button>
      <br />
      <br />
      <table border={2} className='tbl'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Image</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {imgUrl.map((url, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={url} alt={`img-${index}`} height='100px' width='150px' />
              </td>
              <td>
                <button onClick={() => setEditImage(url)}>Edit</button>
                <button onClick={() => deleteData(url)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editImg && (
        <EditModal
          img={editImg}
          updatedImg={updatedImg}
          setUpdatedImg={setUpdatedImg}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default Demo;
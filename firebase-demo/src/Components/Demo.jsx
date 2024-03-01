import React, { useEffect, useState } from 'react'
import { imageDb } from '../firebase/Dbfirebase'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

//   const [img, setImg] = useState('');
//   const [imgUrl,setImgUrl] = useState([]);

//   // const handleClick = () => {
//   //     const imgRef = ref(imageDb, v4())
//   //     uploadBytes(imgRef, img)
//   //   }
   
//   // }
//   return (
//     <div className='App'>
//       <input type='file' onChange={(e) => setImg(e.target.files[0])} />
//       <br /><br />
//       <button onClick={handleClick}>Upload</button>
//     </div>
//   )
// }
function Demo() {
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);

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

  return (
    <div className='App'>
      <input type='file' onChange={(e) => setImg(e.target.files[0])} />
      <br /><br />
      <button onClick={handleClick}>Upload</button>
      <br/><br/>
      {/* {
        imgUrl.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`img-${index}`} height="200px" width="150px" />
          </div>
        ))
      } */}
      <table border={2}>
         <thead>
              <tr>
                  <td>Id</td>
                  <td>Image</td>
                  <td>Action</td>
              </tr>
         </thead>
         <tbody>
          {
              imgUrl.map((url, index) => {
                return (
                   <tr key={index}>
                     <td>{index+1}</td>
                     <td><img src={url} alt={`img-${index}`} height="100px" width="150px" /></td>
                     <td><button>Delete</button></td>
                   </tr>
                  )
              })
          }
         </tbody>
      </table>
    </div>
  );
}

export default Demo

import React, { useState } from 'react'
import { imageDb } from '../firebase/Dbfirebase'
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
function Demo() {
  const [img,setImg] = useState('');
  const handleClick = () => {
  const imgRef = ref(imageDb,v4())
  uploadBytes(imgRef,img)
  }
  return (
    <div className='App'>
      <input type='file' onChange={(e) =>setImg(e.target.files[0])}/>
      <button onClick={handleClick}>Upload</button>
    </div>
  )
}

export default Demo

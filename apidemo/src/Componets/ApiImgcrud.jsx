import React, { useEffect, useState } from 'react'

export default function ApiImgcrud() {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error))
    },[])
  return (
    <div>
          <table border={2}>
            <tbody>
                <th>albumId</th>
                <th>Id</th>
                <th>title</th>
                <th>Img</th>
                <th>Action</th>
            </tbody>
            <tbody>
                {
                    data.map((list,i) =>(
                        <tr>
                            <td>{list.albumId}</td>
                            <td>{list.id}</td>
                            <td>{list.title}</td>
                            <td><img src={list.url} alt="img" height="100px" width="100px" /></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
    </div>
  )
}

import React, { useState } from 'react'

function ApiComponet() {
    const [data,setData] = useState({});
    const appData = () => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setData(json))
    }
  return (
    <div>
        <h3>Api calling...</h3>
        <button type="button" onClick={appData}>Click</button>
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Category</td>
            </tr>
            {
                data.map((i) => {
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.category}</td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}

export default ApiComponet

import React, { useState } from 'react'

function UserTable() {
    const [getalldata,setGetalldata] = useState([]);
  return (
    <div>
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
                <td>Action</td>
            </tr>
            {
                getalldata.map((i,index) => {
                     <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>{i.password}</td>
                        <td><input type="button" value="" /></td>
                     </tr>
                })
            }
        </table>
    </div>
  )
}

export default UserTable

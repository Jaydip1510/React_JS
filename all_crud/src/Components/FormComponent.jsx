import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Redux/Action';


const FormComponent = () => {
    const empData = useSelector((state) => state.empItems || []);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({
        name: "",
        age: "",
        email:"",
        password:"",
        salary: "",
        address: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(addItem(inputValue));
        setInputValue({
            name:'',
            age:'',
            email:'',
            password:'',
            salary:'',
            address:''
        })
    }
    return (
        <div>
            <form onSubmit={handlesubmit}  method='post'>
                <lable>Name:-</lable>
                <input type="text" name="name" onChange={handleChange} placeholder="Enter Your Name" />
                <br/><br/>

                <label htmlFor="">Age:-</label>
                <input type="text" name="age" placeholder='Enter Your Age' onChange={handleChange} />
                <br/><br/>


                <label htmlFor="">Email:-</label>
                <input type="email" name="email" placeholder='Enter Your Email' onChange={handleChange} />
                <br/><br/>

                <label htmlFor="">password:-</label>
                <input type="password" name="password" placeholder='Enter Your Password' onChange={handleChange} />
                <br/><br/>

                <label htmlFor="">Salary:-</label>
                <input type="number" name="salary" placeholder='Enter Your Salary' onChange={handleChange} />
                <br/><br/>

                <label htmlFor="">address:-</label>
                <input type="text" name="address" placeholder="Enter Your Address" onChange={handleChange} />
                <br/><br/>

                <button type='submit'>SaveData</button>
            </form>
            <br/><br/>
            <table border={2}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Salary</th>
                    <th>address</th>
                </tr>
                {
                    empData.map((i,index)=>{
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.email}</td>
                                <td>{i.password}</td>
                                <td>{i.salary}</td>
                                <td>{i.address}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default FormComponent
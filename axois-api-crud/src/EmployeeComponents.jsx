import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase/Demofirebase';
import React, { useEffect, useState } from 'react';

function EmployeeComponents() {
    const [inputValue, setInputValue] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
        salary: '',
    })
    const [allData, setAllData] = useState([]);

    // useEffect(() => {
    //     const j = query(collection(db,'empData'))
    //     const userdata = onSnapshot(j,(querySnapshot)=>{
    //         let dataArray = [];
    //         querySnapshot.forEach((doc)=>{
    //             dataArray.push({...doc.data(),id: doc.id});
    //         });
    //         setAllData(dataArray);
    //     })
    //     return () => userdata;
    // },[]);
    useEffect(() => {
        const j = query(collection(db, 'empData'))
        const unsubscribe = onSnapshot(j, (querySnapshot) => {
            let dataArray = [];
            querySnapshot.forEach((doc) => {
                dataArray.push({ ...doc.data(), id: doc.id });
            });
            setAllData(dataArray);
        });
        return () => unsubscribe();
    }, []);

    const deleteData = async(id) => {
        await deleteDoc(doc(db,"empData",id))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    }
    const handleSubmmit = (e) => {
        e.preventDefault();
        const { name, age, email, password, salary } = inputValue;

        if (name !== '' && age !== '' && email !== '' && password !== '' && salary !== '') {
            addDoc(collection(db, "empData"), {
                name,
                age,
                email,
                password,
                salary,
                completed: false,
            });

            // Reset all input fields
            setInputValue({
                name: '',
                age: '',
                email: '',
                password: '',
                salary: '',
            });
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmmit}>
                <label>Name:-</label>
                <input type='text' name='name' value={inputValue.name} onChange={handleChange} />
                <br />
                <br />

                <label>Age:-</label>
                <input type='number' name='age' value={inputValue.age} onChange={handleChange} />
                <br />
                <br />

                <label>Email:-</label>
                <input type='text' name='email' value={inputValue.email} onChange={handleChange} />
                <br />
                <br />

                <label>Password</label>
                <input type='text' name='password' value={inputValue.password} onChange={handleChange} />
                <br />
                <br />

                <label>Salary:-</label>
                <input type='number' name='salary' value={inputValue.salary} onChange={handleChange} />
                <br />
                <br />

                <button type='submit'>Save Data</button>
            </form>
            <br /><br />
            <table border={2}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Salary</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((i) => (
                            <tr key={i.id}>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.email}</td>
                                <td>{i.password}</td>
                                <td>{i.salary}</td>
                                <td><button onClick={() => deleteData(i.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeComponents;
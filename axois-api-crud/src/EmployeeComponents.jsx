import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase/Demofirebase';
import React, { useEffect, useState } from 'react';

function EmployeeComponents() {
    const [inputValue, setInputValue] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
        salary: '',
    });
    const [allData, setAllData] = useState([]);
    const [id, setId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(query(collection(db, 'empData')));
            const dataArray = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setAllData(dataArray);
        };

        const unsubscribe = onSnapshot(query(collection(db, 'empData')), () => {
            fetchData();
        });

        return () => unsubscribe();
    }, []);

    const deleteData = async (id) => {
        await deleteDoc(doc(db, "empData", id));
    };

    const editData = (id) => {
        const dataToEdit = allData.find((item) => item.id === id);
        if (dataToEdit) {
            setId(id);
            setInputValue({
                name: dataToEdit.name,
                age: dataToEdit.age,
                email: dataToEdit.email,
                password: dataToEdit.password,
                salary: dataToEdit.salary,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmmit = async (e) => {
        e.preventDefault();
        try {
            const { name, age, email, password, salary } = inputValue;

            if (id !== "") {
                // Updating existing data
                await updateDoc(doc(db, 'empData', id), {
                    name,
                    age,
                    email,
                    password,
                    salary,
                });
                console.log('Data updated successfully');
            } else {
                await addDoc(collection(db, 'empData'), {
                    name,
                    age,
                    email,
                    password,
                    salary,
                    completed: false,
                });
                console.log('New data added successfully');
            }
            setInputValue({
                name: '',
                age: '',
                email: '',
                password: '',
                salary: '',
            });

            setId(null); // Reset id state
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };
    return (
        <div>
            <h3 style={{textAlign:'center',color:'blue',textDecoration:'underline'}}>User Form</h3>
            <div className='frm'>
                <form onSubmit={handleSubmmit} className='frm1'>
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

                    <button className='btn btn-primary fw-bold' type='submit'>Save Data</button>
                </form>
            </div>
            <br /><br />
            <h3 className='App'>User Table</h3>
            <table border={2} className='table table-striped'>
                <thead>
                    <tr style={{ textAlign: 'center', fontWeight: "bold" }}>
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
                            <tr key={i.id} style={{ textAlign: 'center' }}>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.email}</td>
                                <td>{i.password}</td>
                                <td>{i.salary}</td>
                                <td><button className='btn btn-outline-success' onClick={() => editData(i.id)}>Edit</button>&nbsp;<button className='btn btn-outline-danger' onClick={() => deleteData(i.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeComponents
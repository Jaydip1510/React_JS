import { addDoc, collection, deleteDoc, doc, onSnapshot, query,getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/Dbfirebase';
import React, { useEffect, useState } from 'react';

function FirebaseComponents() {
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [allData, setAllData] = useState([]);
    const [id,setId] = useState('');
    useEffect(() => {
        let p = query(collection(db, "empInfo"));
        const subdata = onSnapshot(p, (pqr) => {
            let dataArray = [];
            pqr.forEach((doc) => {
                dataArray.push({ ...doc.data(), id: doc.id });
            });
            setAllData(dataArray);
        })
        return () => subdata(); 
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }

    const handleSubmmit = async(e) => {
        e.preventDefault();
        if (id !== '') {
            // Update existing document
            await updateDoc(doc(db, "empInfo", id), {
                name: inputData.name,
                email: inputData.email,
                password: inputData.password,
                completed: false,
            });
            setId('');
        }else{
            const { name, email, password } = inputData;
            if (name !== '' && email !== '' && password !== '') {
                addDoc(collection(db, "empInfo"), {
                    name,
                    email,
                    password,
                    completed: false,
                });
                setInputData({
                    name: '',
                    email: '',
                    password: '',
                })
    
            }
        }
        setId('')
        
    }
    const deleteData = async(id) => {
          await deleteDoc(doc(db,'empInfo',id));
    }

   const editData = async (id) => {
    let j = query(collection(db, 'empInfo'));
    const subdata = onSnapshot(j, (abc) => {
        abc.forEach((doc) => {
            if (doc.id === id) {
                setInputData(doc.data());
            }
        });
    });
    setId(id);
};
    
   
    return (
        <div>
            <div>
                <form onSubmit={handleSubmmit}>
                    <label>Name:-</label>
                    <input type='text' name='name' value={inputData.name} onChange={handleChange} />
                    <br />
                    <br />

                    <label>Email:-</label>
                    <input type='text' name='email' value={inputData.email} onChange={handleChange} />
                    <br />
                    <br />

                    <label>Password:-</label>
                    <input type='text' name='password' value={inputData.password} onChange={handleChange} />
                    <br />
                    <br />
                    <button type='submit'>Save Data</button>
                </form>
            </div>
            <br/><br/>
            <table border={2}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((i) =>{
                            return(
                                <tr  key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.password}</td>
                                    <td><button onClick={() => editData(i.id)}>Edit</button>&nbsp;<button onClick={() => deleteData(i.id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FirebaseComponents;
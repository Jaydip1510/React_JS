import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/Dbfirebase';
import React, { useState } from 'react';

function FirebaseComponents() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmmit = (e) => {
        e.preventDefault();
        if (name !== '' && age !== '' && email !== '' && password !== '' && salary !== '') {
            addDoc(collection(db, "empInfo"), {
                name,
                age,
                email,
                password,
                salary,
                completed: false,
            });
            // Reset all input fields
            setName('');
            setAge('');
            setEmail('');
            setPassword('');
            setSalary('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmmit}>
                <label>Name:-</label>
                <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <br />

                <label>Age:-</label>
                <input type='number' name='age' value={age} onChange={(e) => setAge(e.target.value)} />
                <br />
                <br />

                <label>Email:-</label>
                <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />

                <label>Password</label>
                <input type='text' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />

                <label>Salary:-</label>
                <input type='number' name='salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
                <br />
                <br />

                <button type='submit'>Save Data</button>
            </form>
        </div>
    )
}

export default FirebaseComponents;
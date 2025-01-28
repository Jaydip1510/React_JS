import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function FetchData() {

    const [inputValue, setInputValue] = useState({
        FirstName:'',
        LastName:'',
        Email:'',
        Age:'',
        Gender:'',
        Education:'',
        Address:''
    });

    const handleChange = (e) => {
        const { name , value } = e.target;
        setInputValue({...inputValue, [name]: value});
    }
    
    return (
        <div className='frm2'>
            <div className='frm'>
                <form action="" className='mt-5'>
                    <label htmlFor="firstName">First Name:-</label>
                    <input type="text" className='txt' name="FirstName" onChange={handleChange} id="firstName" />
                    <br /><br />

                    <label htmlFor="lastName">Last Name:-</label>
                    <input type="text" className='txt' name="LastName" onChange={handleChange} id="lastName" />
                    <br /><br />

                    <label htmlFor="email">Email:-</label>
                    <input type="email" className='txt' name="Email" onChange={handleChange} id="email" />
                    <br /><br />

                    <label htmlFor="age">Age:-</label>
                    <input type="number" className='txt' name="Age" onChange={handleChange} id="age" />
                    <br /><br />

                    <label>Gender:-</label>
                    <input type="radio" className='gender' name="Gender" onChange={handleChange} value="Male" id="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" className='gender' name="Gender" onChange={handleChange} value="Female" id="female" />
                    <label htmlFor="female">Female</label>
                    <br /><br />

                    <label>Education:-</label>
                    <input type="checkbox" className='edu' name="Education" onChange={handleChange} value="BCA" id="bca" />
                    <label htmlFor="bca">BCA</label>
                    <input type="checkbox" className='edu' name="Education" onChange={handleChange} value="BBA" id="bba" />
                    <label htmlFor="bba">BBA</label>
                    <input type="checkbox" className='edu' name="Education" onChange={handleChange} value="BA" id="ba" />
                    <label htmlFor="ba">BA</label>
                    <input type="checkbox" className='edu' name="Education" onChange={handleChange} value="MCA" id="mca" />
                    <label htmlFor="mca">MCA</label>
                    <br /><br />

                    <label htmlFor="address">Address:-</label>
                    <input type="text" className='txt' name="Address" onChange={handleChange} id="address" />
                    <br /><br />

                    <button className='btn btn-info' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default FetchData;
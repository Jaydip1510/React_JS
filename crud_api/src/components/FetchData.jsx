import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function FetchData() {
    const [dt, setDt] = useState([]);
    const [inputValue, setInputValue] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Age: '',
        Gender: '',
        Education: '',
        Address: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            const educationArray = inputValue.Education ? inputValue.Education.split(",") : [];
            if (checked) {
                setInputValue({
                    ...inputValue,
                    Education: [...educationArray, value].join(","),
                });
            } else {
                setInputValue({
                    ...inputValue,
                    Education: educationArray.filter((edu) => edu !== value).join(","),
                });
            }
        } else {
            setInputValue({ ...inputValue, [name]: value });
        }
    };

    const setData = async (e) => {
       // Add new data
      try {
        const res = await fetch('http://localhost:3000/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputValue),
        });
        const newData = await res.json();
        setDt([...dt, newData]);
        setInputValue({ FirstName: '',LastName:'', Email: '',Age: '', Gender: '',Education:'', Address: '' });
      } catch (error) {
        console.error('Error inserting data:', error);
      }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
            <div className='p-4 rounded shadow bg-white' style={{ width: '400px' }}>
                <form onSubmit={setData} method='post'>
                    <h3 className='text-center mb-4'>Submit Form</h3>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" className='form-control' name="FirstName" onChange={handleChange} value={inputValue.FirstName} id="firstName" />
                    <br />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className='form-control' name="LastName" onChange={handleChange} value={inputValue.LastName} id="lastName" />
                    <br />

                    <label htmlFor="email">Email:</label>
                    <input type="email" className='form-control' name="Email" onChange={handleChange} value={inputValue.Email} id="email" />
                    <br />

                    <label htmlFor="age">Age:</label>
                    <input type="number" className='form-control' name="Age" onChange={handleChange} value={inputValue.Age} id="age" />
                    <br />

                    <label>Gender:</label>
                    <div>
                        <input type="radio" className='me-2' name="Gender" onChange={handleChange} value="Male" id="male" checked={inputValue.Gender === "Male"} />
                        <label htmlFor="male" className="me-3">Male</label>
                        <input type="radio" className='me-2' name="Gender" onChange={handleChange} value="Female" id="female" checked={inputValue.Gender === "Female"} />
                        <label htmlFor="female">Female</label>
                    </div>
                    <br />

                    <label>Education:</label>
                    <div>
                        <input type="checkbox" className='me-2' name="Education" onChange={handleChange} value="BCA" id="bca" checked={inputValue.Education.includes("BCA")} />
                        <label htmlFor="bca" className="me-3">BCA</label>
                        <input type="checkbox" className='me-2' name="Education" onChange={handleChange} value="BBA" id="bba" checked={inputValue.Education.includes("BBA")} />
                        <label htmlFor="bba" className="me-3">BBA</label>
                        <input type="checkbox" className='me-2' name="Education" onChange={handleChange} value="BA" id="ba" checked={inputValue.Education.includes("BA")} />
                        <label htmlFor="ba" className="me-3">BA</label>
                        <input type="checkbox" className='me-2' name="Education" onChange={handleChange} value="MCA" id="mca" checked={inputValue.Education.includes("MCA")} />
                        <label htmlFor="mca">MCA</label>
                    </div>
                    <br />

                    <label htmlFor="address">Address:</label>
                    <input type="text" className='form-control' name="Address" onChange={handleChange} value={inputValue.Address} id="address" />
                    <br />

                    <button className='btn btn-info w-100' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default FetchData;

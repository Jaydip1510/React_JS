import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Formfunctionbasecomponent() {
    const [inputs, setInputs] = useState({});
    const [qual, setQual] = useState([]);
    const [alluserdata, setUserdata] = useState(JSON.parse(localStorage.getItem('UserInfo')))
    const [editMode, setEditMode] = useState(false); // Define edit mode state
    const [editIndex, setEditIndex] = useState(null); // Define edit index state
    const navigate = useNavigate ()
    const submitData = (e) => {
        e.preventDefault();
      
        // Retrieve data from localStorage and parse it as an array if it exists, otherwise, use an empty array
        const retrievedData = JSON.parse(localStorage.getItem('UserInfo')) || [];
      
        const updatedData = [...retrievedData]; // Create a copy of retrievedData
      
        if (editMode && editIndex !== null) {
          updatedData[editIndex] = { ...inputs, qual: [...qual] };
        } else {
          updatedData.push({ ...inputs, qual: [...qual] });
        }
      
        localStorage.setItem('UserInfo', JSON.stringify(updatedData));
        setUserdata(updatedData);
        setInputs({});
        setQual([]);
        setEditMode(false);
        setEditIndex(null);
      
        const form = document.getElementById('frm');
        if (form) {
          form.reset();
        }
        navigate('/usertable');
      };
    const empdata = JSON.parse(localStorage.getItem("UserInfo"));
    const setData = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        setInputs(i => ({ ...i, [name]: value }))
    }
    const getQualData = (e) => {
        //    const { value, checked } = e.target;
        //    if (checked) {
        //     setQual(prevQual => [...prevQual, value]); // Add the qualification if checked
        //    } else {
        //     setQual(prevQual => prevQual.filter(item => item !== value)); // Remove the qualification if unchecked
        //    }
        const { value, checked } = e.target;

        if (checked) {
            setQual((prevQual) => [...prevQual, value]);
            setInputs((prevInputs) => ({
                ...prevInputs,
                qual: [...(prevInputs.qual || []), value],
            }));
        } else {
            setQual((prevQual) => prevQual.filter((item) => item !== value));
            setInputs((prevInputs) => ({
                ...prevInputs,
                qual: (prevInputs.qual || []).filter((item) => item !== value),
            }));
        }
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-3 bg-secondary'>
                    <form name="frm" id='frm' onSubmit={submitData}>

                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Name:-</label>
                        <input type="text" name="name" className='mt-5' style={{ height: 30, width: 200 }} value={inputs.name} onChange={setData} placeholder='Enter Your Name' />
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Gender:-</label>
                        <input type="radio" name="g1" id="" value="male" defaultValue="" checked={inputs.g1 === 'male'} onChange={setData} />
                        Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="g1" id="" checked={inputs.g1 === 'female'} value="female" defaultValue="" onChange={setData} />
                        Female
                        <br /><br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Email:-</label>
                        <input type="email" style={{ height: 30, width: 190 }} name="email" id="" value={inputs.email} onChange={setData} placeholder='Enter Email Address' />
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Password:-</label>
                        <input type="password" style={{ height: 30, width: 190 }} name="password" id="" value={inputs.password} onChange={setData} placeholder='Enter Password' />
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Qualification:-</label>
                        <input type="checkbox" name="qual" value="12th" defaultChecked="" checked={inputs.qual && inputs.qual.includes('12th')} onChange={getQualData} />
                        12th&nbsp;&nbsp;
                        <input type="checkbox" name="qual" value="BCA" defaultChecked="" checked={inputs.qual && inputs.qual.includes('BCA')} onChange={getQualData} />
                        BCA&nbsp;&nbsp;
                        <input type="checkbox" name="qual" value="MCA" defaultChecked="" checked={inputs.qual && inputs.qual.includes('MCA')} onChange={getQualData} />
                        MCA
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Country:-</label>
                        <select name="country" style={{ width: 190 }} id="" value={inputs.country} required="" onChange={setData}>
                            <option value="">--Select Country--</option>
                            <option value="IND">IND</option>
                            <option value="USA">USA</option>
                            <option value="AUS">AUS</option>
                            <option value="SA">SA</option>
                        </select>
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 100 }}>Address:-</label>
                        <textarea name="address" rows={2} cols={20} value={inputs.address ? inputs.address : ''} defaultValue={''} onChange={setData} />
                        <br />
                        <br />
                        <button type="submit" className='btn btn-info' defaultValue="submit">button</button>
                    </form>
                </div>
                <div className='col-9 bg-warning pt-5 d-flex justify-content-center align-items-start padding-top'>
                    {/* <table className='table table-striped'>
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Country</th>
                                <th>qualifications</th>
                                <th>Address</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        {empdata && empdata.length > 0 ? (
                            empdata.map((i, index) => {
                                return (
                                    <tbody>
                                        <tr style={{ textAlign: "center" }}>
                                            <td>{index + 1}</td>
                                            <td>{i.name}</td>
                                            <td>{i.g1}</td>
                                            <td>{i.email}</td>
                                            <td>{i.password}</td>
                                            <td>{i.country}</td>
                                            <td>{i.qual}</td>
                                            <td>{i.address}</td>
                                            <td><button className='btn btn-success bg-success' onClick={() => editinfo(index)}>Edit</button><button type="button" className='btn btn-danges bg-danger' onClick={() => deleteinfo(index)}>Delete</button></td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        ) : ""
                        }

                    </table> */}
                </div>
            </div>
        </div>
    )
}

export default Formfunctionbasecomponent
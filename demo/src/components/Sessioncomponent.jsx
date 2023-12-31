import React, { useState } from 'react'

function Sessioncomponent() {
    const [inputs, setInputs] = useState({});
    const [qual, setQual] = useState([]);
    const submitData = (e) => {
        var tmpData = [];
        e.preventDefault();
        var empdata = JSON.parse(sessionStorage.getItem("UserInfo"));
        var tmpData = empdata && empdata.length > 0 ? [...empdata] : [];
        tmpData.push(inputs);
        sessionStorage.setItem("UserInfo", JSON.stringify(tmpData));
        // Clear form inputs after submission
        document.getElementById('frm').reset(); // Reset the form
        // Clear form inputs after submission
        setInputs({}); // Reset inputs to empty object

        // Clear qualifications after submission
        setQual([]); // Reset qual to empty array
    }
   const empdata = JSON.parse(sessionStorage.getItem("UserInfo"));
    const setData = (e) => {

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        setInputs(i => ({ ...i, [name]: value }))
    }
    const getQualData = (e) => {
        qual.push(e.target.value)
        setQual(qual)
    }
    
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-5 bg-secondary'>
                    <form name="frm" id='frm' onSubmit={submitData}>

                        <label htmlFor="" style={{ color: "blue", width: 200 }}>Name:-</label>
                        <input type="text" name="name" className='mt-5' style={{ height: 30, width: 200 }} value={inputs.name} onChange={setData} placeholder='Enter Your Name' />
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 200 }}>Gender:-</label>
                        <input type="radio" name="g1" id="" value="male" defaultValue="" onChange={setData} />
                        Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="g1" id="" value="female" defaultValue="" onChange={setData} />
                        Female
                        <br /><br />
                        <label htmlFor="" style={{ color: "blue", width: 200 }}>Email:-</label>
                        <input type="email" style={{ height: 30, width: 190 }} name="email" id="" value={inputs.email} onChange={setData} placeholder='Enter Email Address' />
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 200 }}>Password:-</label>
                        <input type="password" style={{ height: 30, width: 190 }} name="password" id="" value={inputs.password} onChange={setData} placeholder='Enter Password' />
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 200 }}>Qualification:-</label>
                        <input type="checkbox" name="qual" value="10th" defaultChecked="" onChange={getQualData} />
                        10th&nbsp;&nbsp;
                        <input type="checkbox" name="qual" value="12th" defaultChecked="" onChange={getQualData} />
                        12th&nbsp;&nbsp;
                        <input type="checkbox" name="qual" value="BCA" defaultChecked="" onChange={getQualData} />
                        BCA&nbsp;&nbsp;
                        <input type="checkbox" name="qual" value="MCA" defaultChecked="" onChange={getQualData} />
                        MCA
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 200 }}>Country:-</label>
                        <select name="country" style={{ width: 190 }} id="" required="" onChange={setData}>
                            <option value="">--Select Country--</option>
                            <option value="IND">IND</option>
                            <option value="USA">USA</option>
                            <option value="AUS">AUS</option>
                            <option value="SA">SA</option>
                        </select>
                        <br />
                        <br />
                        <label htmlFor="" style={{ color: "blue", width: 200 }}>Address:-</label>
                        <textarea name="address" rows={2} cols={20} defaultValue={''} onChange={setData} />
                        <br />
                        <br />
                        <button type="submit" className='btn btn-info' defaultValue="submit">button</button>

                    </form>
                </div>
                <div className='col-7 bg-warning pt-5 d-flex justify-content-center align-items-start padding-top'>
                    <table className='table table-striped'>
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Country</th>
                                <th>Address</th>
                                
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
                                            <td>{i.address}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        ) : ""
                        }

                    </table>
                </div>
            </div>

        </div>
    )
}

export default Sessioncomponent


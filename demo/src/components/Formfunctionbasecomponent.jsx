import React, { useState } from 'react'

function Formfunctionbasecomponent() {
    const [inputs, setInputs] = useState({})
    const [qual, setQual] = useState({})
    const submitData = (e) => {
        e.preventDefault();
        console.log("Name is:-" + inputs.name);
        console.log("gender is:-" + inputs.g1);
        console.log("Email is:-" + inputs.email);
        console.log("password is:-" + inputs.password);
        console.log("Country is:-" + inputs.country);
        console.log("Address is:-" + inputs.address);
    }
    const setData = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        setInputs(i => ({ ...i, [name]: value }))
    }
    return (
        <div>
            <form name="frm" onSubmit={submitData}>
                <label htmlFor="">Name:-</label>
                <input type="text" name="name" value={inputs.name} onChange={setData} placeholder='Enter Your Name' /><br /><br />
                <label htmlFor="">Gender:-</label>
                <input type="radio" name="g1" id="" value="male" defaultValue="" onChange={setData} />
                Male
                <input type="radio" name="g1" id="" value="female" defaultValue="" onChange={setData} />
                Female
                <br /><br />
                <label htmlFor="">Email:-</label>
                <input type="email" name="email" id="" value={inputs.email} onChange={setData} placeholder='Enter Email Address' />
                <br />
                <br />
                <label htmlFor="">Password:-</label>
                <input type="password" name="password" id="" value={inputs.password} onChange={setData} />
                <br />
                <br />
                <label htmlFor="">Qualification:-</label>
                <input type="checkbox" name="qual" value="10th" defaultChecked="" onChange={getQualData} />
                10th
                <input type="checkbox" name="qual" value="12th" defaultChecked="" onChange={getQualData} />
                12th
                <input type="checkbox" name="qual" value="BCA" defaultChecked="" onChange={getQualData} />
                BCA
                <input type="checkbox" name="qual" value="MCA" defaultChecked="" onChange={getQualData} />
                MCA
                <br />
                <br />
                <label htmlFor="">Country:-</label>
                <select name="country" id="" required="" onChange={setData}>
                    <option value="">--Select Country--</option>
                    <option value="IND">IND</option>
                    <option value="USA">USA</option>
                    <option value="AUS">AUS</option>
                    <option value="SA">SA</option>
                </select>
                <br />
                <br />
                <label htmlFor="">Address:-</label>
                <textarea name="address" rows={2} cols={20} defaultValue={''} onChange={setData} />
                <br />
                <br />
                <input type="submit" className='btn btn-info' defaultValue="submit" />
            </form>
        </div>
    )
}

export default Formfunctionbasecomponent


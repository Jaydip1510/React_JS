import React, { useState } from "react";

export const Alldatacomponent = () => {

    const [info, setInfo] = useState({ fname: "", email: "", psw: "", add: "", mno: "" });
    const [array, setArray] = useState(JSON.parse(localStorage.getItem("Array")) || []);

    const Handlechange = (e) => {
        console.log(e.target);
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    const HandleSubmit = (e) => {
        console.log(e.target);
        setArray([...array, info]);
        localStorage.setItem("Array", JSON.stringify([...array, info]));
    }

    return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-5 bg-secondary'>
                    <form action="" className="text-center mt-5 text-primary" >
                        <label htmlFor="fname" style={{width:100}} >Name : </label>
                        <input type="text" name="fname" style={{height:35,width:250}} placeholder="Enter Your  Name" value={info.fname} onChange={Handlechange} />
                        <br /><br />
                        <label htmlFor="email" style={{width:100}}>Email :</label>
                        <input type="email" name="email" style={{height:35,width:250}} id="email" placeholder="Enter your Email Id" value={info.email} onChange={Handlechange} />
                        <br /><br />
                        <label htmlFor="psw" style={{width:100}} >Password :</label>
                        <input type="password" name="psw" style={{height:35,width:250}} id="psw" placeholder=" Enter your Password" value={info.psw} onChange={Handlechange} />
                        <br /><br />
                        <label htmlFor="add" style={{width:100}} >Address : </label>
                        <input type="text" id="add" style={{height:35,width:250}} name="add" value={info.add} onChange={Handlechange} placeholder="Enter your Address" />
                        <br /><br />
                        <label htmlFor="mno" style={{width:100}}>Number : </label>
                        <input type="number" id="mno" style={{height:35,width:250}} name="mno" value={info.mno} onChange={Handlechange} placeholder="Enter your Mobile" />
                        <br /><br />
                        <button type="submit" onClick={HandleSubmit} className="p-2 px-5 text-center bg-primary fw-bold text-light border-0 ">Submit</button>
                    </form >
                </div>
                <div className='col-7 bg-warning pt-5 d-flex justify-content-center align-items-start padding-top'>
                <table className='table table-striped' border={2} cellpadding="8">
                    <thead style={{textAlign:"center"}}>
                        <th className=" border border-primary">Name</th>
                        <th className=" border border-primary">Email</th>
                        <th className=" border border-primary">Password</th>
                        <th className="border border-primary">Address</th>
                        <th className=" border border-primary">Mobile Number</th>
                    </thead>
                    <tbody>
                        {array.map((item) => {
                            return (
                                <tr style={{textAlign:"center"}}>
                                    <td>{item.fname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.psw}</td>
                                    <td>{item.add}</td>
                                    <td>{item.mno}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                 </table>
                </div>
            </div>
        </div>
            
    )
}

export default Alldatacomponent;
import React, { useState,useEffect } from 'react'

function Formvalidation() {
    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
        age: null
    })
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.email.length < 15) {
            errors.email = "Email is too short";
        }
        if (inputValues.password.length < 5) {
            errors.password = "Password is too short";
        }
        if (!inputValues.age || inputValues.age < 18) {
            errors.age = "Minimum age is 18";
        }
        return errors;
    };
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };
    const handleSubmit = (event) => {
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };
    const finishSubmit = () => {
        console.log(inputFields);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);
    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit}>
            <table border={3} align='center' className='mt-5' style={{width:"800px",height:"400px"}} cellPadding={0} cellSpacing={0}>
                <div>
                    <label for="email" className='mt-5' style={{width:100}}>Email</label>
                    <input
                        
                        type="email"
                        name="email"
                        value={inputFields.email}
                        onChange={handleChange}
                    ></input><br/><br/>
                    <label for="password" style={{width:100}}>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={inputFields.password}
                        onChange={handleChange}
                    ></input><br/><br/>
                    <label for="password" style={{width:100}}>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={inputFields.age}
                        onChange={handleChange}
                    ></input>
                </div>
                <button type="submit" className='mt-5' onClick={() => {
            handleSubmit()
          }}>Submit Information</button>
          </table>
            </form>
        </div>
    )
}

export default Formvalidation

import { useState, useEffect } from "react";

const Formvalidation = () => {
    const [inputFields, setInputFields] = useState({
        name: "",
        email: "",
        password: "",
        age: null,
        address: "",
        gender: "",
        qualification: []
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.name.length < 10) {
            errors.name = "Name is too short";
        }
        if (inputValues.email.length < 15) {
            errors.email = "Email is too short";
        }
        if (inputValues.password.length < 8) {
            errors.password = "Password is too short";
        }

        // if (inputValues.password.length < 8) {
        //     errors.password = "Password is too short";
        // } else {
        //     let countUpperCase = 0;
        //     let countLowerCase = 0;
        //     let countDigit = 0;
        //     let countSpecialCharacters = 0;
        //     const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', '{', ']', '}', ':', ';', '<', '>'];

        //     for (let i = 0; i < inputValues.password.length; i++) {
        //         const char = inputValues.password[i];

        //         if (specialChars.includes(char)) {
        //             countSpecialCharacters++;
        //         } else if (!isNaN(char * 1)) {
        //             countDigit++;
        //         } else {
        //             if (char === char.toUpperCase()) {
        //                 countUpperCase++;
        //             }
        //             if (char === char.toLowerCase()) {
        //                 countLowerCase++;
        //             }
        //         }
        //     }

        //     if (countUpperCase < 1 || countLowerCase < 1 || countDigit < 1 || countSpecialCharacters < 1) {
        //         errors.password = "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character";
        //     }
        // }

        if (!inputValues.age || inputValues.age < 18) {
            errors.age = "Minimum age is 18";
        }
        if (inputValues.address.length < 15) {
            errors.address = "address is too short";
        }
        if (!inputValues.gender) {
            errors.gender = "Please select a gender";
        }
        if (!inputValues.qualification || inputValues.qualification.length === 0) {
            errors.qualification = "Please select at least one qualification";
        }

        return errors;
    };
    const handleQualificationChange = (e) => {
        const { value, checked } = e.target;
        let updatedQualifications = [...inputFields.qualification];

        if (checked) {
            updatedQualifications.push(value);
        } else {
            updatedQualifications = updatedQualifications.filter(
                (qualification) => qualification !== value
            );
        }
        setInputFields({ ...inputFields, qualification: updatedQualifications });
    };
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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
        <div className="App">
            {Object.keys(errors).length === 0 && submitting ? (
                <span className="success">Successfully submitted ✓</span>
            ) : null}
            <form onSubmit={handleSubmit}>
                <h1 style={{ color: "green",fontWeight:"bold" }}>Registration Form</h1>
                <table border="nono" align='center' className='mt-3 bg-warning' style={{ width: "700px", height: "600px" }} cellPadding={0} cellSpacing={0}>
                    <div className="mt-5" align="center">
                        <label style={{ width: 100, color: 'blue',fontWeight:"bold" }} for="name">Name:-</label>
                        <input
                            type="text"
                            name="name"
                            value={inputFields.name}
                            onChange={handleChange}
                            style={{ height: 40, width: 250, border: errors.name ? "1px solid red" : null }}
                        ></input><br /><br />
                        {errors.name ? (
                            <p style={{ color: "red" }}>Name should be at least 10 characters long</p>
                        ) : null}

                        <label style={{ width: 100, color: 'blue',fontWeight:"bold" }} for="age">Age:-</label>
                        <input
                            type="number"
                            name="age"
                            value={inputFields.age}
                            onChange={handleChange}
                            style={{ height: 40, width: 250, border: errors.age ? "1px solid red" : null }}
                        ></input><br /><br />
                        {errors.age ? <p style={{ color: "red" }}>Minimum age is 18</p> : null}

                        <label style={{ width: 100, color: 'blue',fontWeight:"bold" }} >Gender:-</label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={inputFields.gender === "male"}
                                onChange={handleChange}
                                style={{ marginRight: 5 }}
                            />
                            Male
                        </label>
                        <label style={{ marginLeft: 10 }}>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={inputFields.gender === "female"}
                                onChange={handleChange}
                                style={{ marginRight: 5 }}
                            />
                            Female
                        </label>
                        <label style={{ marginLeft: 10 }}>
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                checked={inputFields.gender === "other"}
                                onChange={handleChange}
                                style={{ marginRight: 5 }}
                            />
                            Other
                        </label>

                        {errors.gender ? (
                            <p style={{ color: "red" }}>Please select a gender</p>
                        ) : null}<br /><br />


                        <label style={{ width: 100, color: 'blue',fontWeight:"bold" }} for="email">Email:-</label>
                        <input
                            type="email"
                            name="email"
                            value={inputFields.email}
                            onChange={handleChange}
                            style={{ height: 40, width: 250, border: errors.email ? "1px solid red" : null }}
                        ></input><br /><br />
                        {errors.email ? (
                            <p style={{ color: "red" }}>Email should be at least 15 characters long</p>
                        ) : null}


                        <label style={{ width: 100, color: 'blue',fontWeight:"bold" }} for="password">Password:-</label>
                        <input
                            type="password"
                            name="password"
                            value={inputFields.password}
                            onChange={handleChange}
                            style={{ height: 40, width: 250, border: errors.password ? "1px solid red" : null }}
                        ></input><br /><br />
                        {errors.password ? (
                            <p style={{ color: "red" }}>
                                Password should be at least 8 characters long
                            </p>
                        ) : null}


                        <label style={{ width: 100, color: 'blue',fontWeight:"bold" }} for="address">Address:-</label>
                        <textarea
                            name="address"
                            rows={2}
                            cols={20}
                            value={inputFields.address}
                            onChange={handleChange}
                            style={{ height: 40, width: 250, border: errors.address ? "1px solid red" : null }}
                        /><br /><br />
                        {errors.address ? (
                            <p style={{ color: "red" }}>address should be at least 15 characters long</p>
                        ) : null}

                        <label style={{ width: 100, color: 'blue',fontWeight:"bold",marginRight: 20 }}>Qualification:-</label>
                        
                            <input
                                type="checkbox"
                                name="qualification"
                                value="SSC"
                                checked={inputFields.qualification.includes("SSC")}
                                onChange={handleQualificationChange}
                                style={{ marginRight: 5 }}
                            />
                            SSC

                        <label style={{ marginLeft: 10 }}>
                            <input
                                type="checkbox"
                                name="qualification"
                                value="HSC"
                                checked={inputFields.qualification.includes("HSC")}
                                onChange={handleQualificationChange}
                                style={{ marginRight: 5 }}
                            />
                            HSC
                        </label>
                        <label style={{ marginLeft: 10 }}>
                            <input
                                type="checkbox"
                                name="qualification"
                                value="BCA"
                                checked={inputFields.qualification.includes("BCA")}
                                onChange={handleQualificationChange}
                                style={{ marginRight: 5 }}
                            />
                            BCA
                        </label>
                        <label style={{ marginLeft: 10 }}>
                            <input
                                type="checkbox"
                                name="qualification"
                                value="MCA"
                                checked={inputFields.qualification.includes("MCA")}
                                onChange={handleQualificationChange}
                                style={{ marginRight: 5 }}
                            />
                            MCA
                        </label>
                        {/* Add more qualification options as needed */}
                        {errors.qualification ? (
                            <p style={{ color: "red" }}>Please select at least one qualification</p>
                        ) : null}<br /><br />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </table>
            </form>
        </div >
    );
}

export default Formvalidation
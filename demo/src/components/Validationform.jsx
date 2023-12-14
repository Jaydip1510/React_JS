import { useState, useEffect } from "react";

 const Validationform = () => {
  const [inputFields, setInputFields] = useState({
    name:"",
    email: "",
    password: "",
    age: null
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
      <table border={2} align='center' className='mt-5 bg-info' style={{width:"500px",height:"400px"}} cellPadding={0} cellSpacing={0}>
        <div className="mt-5">
        <label style={{width:100}} for="name">Name:-</label>
          <input
            type="text"
            name="name"
            value={inputFields.name}
            onChange={handleChange}
            style={{height:25, width:175, border: errors.name ? "1px solid red" : null }}
          ></input><br/><br/>
          {errors.name ? (
            <p className="error">Name should be at least 10 characters long</p>
          ) : null}
          <label style={{width:100}} for="email">Email:-</label>
          <input
            type="email"
            name="email"
            value={inputFields.email}
            onChange={handleChange}
            style={{height:25, width:175, border: errors.email ? "1px solid red" : null }}
          ></input><br/><br/>
          {errors.email ? (
            <p className="error">Email should be at least 15 characters long</p>
          ) : null}
          <label  style={{width:100}} for="password">Password</label>
          <input
            type="password"
            name="password"
            value={inputFields.password}
            onChange={handleChange}
            style={{height:25, width:175, border: errors.password ? "1px solid red" : null }}
          ></input><br/><br/>
          {errors.password ? (
            <p className="error">
              Password should be at least 5 characters long
            </p>
          ) : null}
          <label style={{width:100}} for="age">Age</label>
          <input
            type="number"
            name="age"
            value={inputFields.age}
            onChange={handleChange}
            style={{height:25, width:175, border: errors.age ? "1px solid red" : null }}
          ></input><br/><br/>
          {errors.age ? <p className="error">Minimum age is 18</p> : null}
        </div>
        <button type="submit">Submit Information</button>
        </table>
      </form>
    </div>
  );
}

export default Validationform
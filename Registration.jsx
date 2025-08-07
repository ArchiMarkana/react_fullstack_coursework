import React from "react";

function FunRegi() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    gender: "",
    dob: ""
  });

  const [errors, setErrors] = React.useState({});
  const [msg, setMsg] = React.useState("");

  const handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;

    let newFormData = Object.assign({}, formData);
    newFormData[fieldName] = fieldValue;

    setFormData(newFormData);
  };

  const validate = () => {
    let err = {};
    let isValid = true;

    // Name validation
    if (!formData.name) {
      err.name = "Name is required";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      err.name = "Name must contain only letters";
      isValid = false;
    }

    if (!formData.email) {
      err.email = "Email is required";
      isValid = false;
    } else if (!formData.email.includes("@")) {
      err.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password) {
      err.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      err.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!formData.phone) {
      err.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      err.phone = "Phone must be 10 digits";
      isValid = false;
    }

    if (!formData.age) {
      err.age = "Age is required";
      isValid = false;
    } else if (isNaN(formData.age) || formData.age <= 0) {
      err.age = "Age must be a valid number";
      isValid = false;
    }

    if (!formData.gender) {
      err.gender = "Gender is required";
      isValid = false;
    }

    if (!formData.dob) {
      err.dob = "Date of Birth is required";
      isValid = false;
    }

    setErrors(err);
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      setMsg("Registration Successful!");
      setErrors({});
    } else {
      setMsg("");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ textAlign: "left", width: "300px" }}>
        <h2 style={{ textAlign: "center" }}>Registration Form</h2>

        Name:{" "}
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <p style={{ color: "red" }}>{errors.name}</p>

        Email:{" "}
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <p style={{ color: "red" }}>{errors.email}</p>

        Password:{" "}
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <p style={{ color: "red" }}>{errors.password}</p>

        Phone:{" "}
        <input type="text" name="phone" onChange={handleChange} />
        <br />
        <p style={{ color: "red" }}>{errors.phone}</p>

        Age:{" "}
        <input type="text" name="age" onChange={handleChange} />
        <br />
        <p style={{ color: "red" }}>{errors.age}</p>

        Gender: <br />
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male <br />
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female <br />
        <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other <br />
        <p style={{ color: "red" }}>{errors.gender}</p>

        Date of Birth:{" "}
        <input type="date" name="dob" onChange={handleChange} />
        <br />
        <p style={{ color: "red" }}>{errors.dob}</p>

        <input type="button" value="Register" onClick={handleSubmit} style={{ marginTop: "10px" }} />
        <br />
        <p style={{ color: "green" }}>{msg}</p>
      </div>
    </div>
  );
}

export default FunRegi;

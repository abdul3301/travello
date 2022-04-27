import React, { useState, useEffect } from "react";
import { Form, Button, Input } from "antd";
import { Link } from "react-router-dom";
import "./register.css";
let initialData = {
  email: "",
  password: "",
  ConfirmPassword: "",
};
function RegisterScreen({ history }) {
  const [formData, setformData] = useState(initialData);
  const { email, password, ConfirmPassword } = formData;
  // useEffect(() => {
  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password != ConfirmPassword) {
      alert("passwords do not match");
      return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let existingUser = users.find((element) => element.email == email);
    if (existingUser) alert("user already exists");
    else {
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("registered successfully");
      history.push("/login");
    }
  };
  const handleChange = (e) => {
    setformData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="RegisterPage">
      {" "}
      <div className="RegisterMain">
        <div className="RegisterContainer">        
          <h1 style={{ fontFamily: "initial" }}>REGISTER</h1>
          <Form className="registerForm">
            <Input
              style={{ margin: "10px 100px", padding: "10px" }}
              name="email"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
              required={true}
            />

            <Input
              style={{ margin: "10px 100px", padding: "10px" }}
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
              required={true}
            />

            <Input
              style={{ margin: "10px 100px", padding: "10px" }}
              name="ConfirmPassword"
              type="password"
              value={ConfirmPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
              required={true}
            />

            <Button
              style={{
                margin: "20px",
                left:"80px",
                fontSize: "20px",
                padding: "10px",
                textAlign: "center",
                justifyContent: "center",
                height: "50px",
              }}
              onClick={submitHandler}
              className="submitBtn"
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;

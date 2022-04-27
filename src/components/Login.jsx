import React, { useState, useEffect } from "react";
import { Form, Button, Input } from "antd";
import { Link } from "react-router-dom";
import "./login.css";

function LoginScreen({ history, submitHandler, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(user);
    if (user && Object.keys(user).length) {
      history.push("/");
    }
  }, []);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   let users = JSON.parse(localStorage.getItem("users")) || [];
  //   let existingUserIndex = users.findIndex(
  //     (element) => element.email == email && element.password == password
  //   );

  //   if (existingUserIndex != -1) {
  //     alert("Login Successful");
  //     users[existingUserIndex] = { ...users[existingUserIndex], login: true };
  //     localStorage.setItem("users", JSON.stringify(users));
  //     history.push("/");
  //   } else {
  //     alert("Invalid Username or Password");
  //   }
  // };

  return (
    <div className="loginPage">
      <div className="loginMain">
        <div className="loginContainer">
          {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
          {/* {loading && <Loading />} */}
          <h1 style={{ fontFamily: "initial" }}>LOGIN</h1>
          <Form className="loginForm">
            <Input
              style={{ margin: "10px 30px", padding: "10px" }}
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />

            <Input
              style={{ margin: "10px 30px", padding: "10px" }}
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />

            <Button
              className="loginBtn"
              style={{
                margin: "20px",
                left:"35px",
                fontSize: "20px",
                padding: "10px",
                textAlign: "center",
                justifyContent: "center",
                height: "50px",
                
              }}
              onClick={(e) => submitHandler(e, email, password, history)}

            >
              SUBMIT
            </Button>
          </Form>
          <div loginText style={{ fontSize: "25px" }}>
            {" "}
            Not Registered?{" "}
            <Link to="/register" style={{ fontSize: "20px" }}>
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;

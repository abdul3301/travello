import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

toast.configure();

export default function Login() {
  const [signUp, setSignUp] = useState("");

  const url = "/user/register";
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputs = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const submit = async (e) => {
    e.preventDefault();
    const obj = {
      username: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    const res = await axios.post("http://localhost:5000/user/register", obj);

    if (res) {
      console.log("Data Submitted");
      toast.success("Registered Successfully, You Can Now Log In");
    } else {
      toast.error("Registration Failed, try again");
    }

    // console.log(obj);
    // const res = await axios.post('http://localhost:5000/user/register ', obj);

    // if (res) {
    //   console.log('Data Submitted');
    //   toast.success('Registration Successful, You Can Now Log In', {
    //     autoClose: 3000,
    //   });
    // } else {
    //   toast.error('Registration Failed', {
    //     autoClose: 3000,
    //   });
    // }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const obj = {
      email: data.email,
      password: data.password,
    };
    const res = await axios.post("http://localhost:5000/user/login", obj);

    if (res) {
      console.log("Data Submitted");
      toast.success("Login Success");
      history.push("/Adventures");
    } else {
      toast.error("Login Failed, try again");
    }
  };

  return (
    <Section
      style={{
        fontFamily: "'Lato', sans-serif",
        background: "#f6f5f7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        paddingTop: "2rem",
      }}
    >
      <div
        className={signUp ? "container" : " container right-panel-active "}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={(e) => submit(e)}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <GrFacebookOption />
              </a>
              <a href="#" className="social">
                <AiOutlineGooglePlus />
              </a>
              <a href="#" className="social">
                <GrLinkedinOption />
              </a>
            </div>
            <span> or use your email for registration</span>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => handleInputs(e)}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => handleInputs(e)}
              placeholder="Email"
            />
            <input
              type="number"
              name="phone"
              value={data.phone}
              onChange={(e) => handleInputs(e)}
              placeholder="Phone No"
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => handleInputs(e)}
              placeholder="Password"
            />
            <button>Sign UP</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => submitLogin(e)} action="#">
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social">
                <GrFacebookOption />
              </a>
              <a href="#" className="social">
                <AiOutlineGooglePlus />
              </a>
              <a href="#" className="social">
                <GrLinkedinOption />
              </a>
            </div>
            <span> or use your account</span>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => handleInputs(e)}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => handleInputs(e)}
              placeholder="Password"
            />
            <a href="#">Forget your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1> Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setSignUp(!signUp)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1> Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us </p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setSignUp(!signUp)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  * {
    box-sizing: border-box;
  }

  h1 {
    font-weight: bold;
    margin: 0;
  }
  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  span {
    font-size: 12px;
  }
  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }
  .container {
    background: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 48%;
    min-height: 580px;
  }
  .form-container form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .social-container {
    margin: 20px 0;
  }
  .social-container a {
    border: 1px solid #ddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }
  .form-container input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }

  button {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background: #ff4b2b;
    color: #fff;
    font-size: 12px;
    font-width: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
  }
  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }
  .button .ghost {
    background: transparent;
    border-color: #fff;
  }
  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }
  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }
  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transform: transform 0.6s ease-in-out;
    z-index: 99;
  }
  .overlay {
    background-image: url("https://images.unsplash.com/photo-1589979812000-4eab44f02c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=695&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transform: transform 0.6s ease-in-out;
  }
  .overlay-panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateX(0);
    transform: transform 0.6s ease-in-out;
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }
  .overlay-left {
    transform: translateX(-20%);
  }

  // Move signin to the right
  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  // Move overlay to left
  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  // Bring sign up over sign in
  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  }

  // Move overlay back to right
  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }
  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }
  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  // Responsive
  @media (max-width: 1024px) {
    .container {
      margin-top: 2rem;
      background: #fff;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
      position: relative;
      overflow: hidden;
      width: 768px;
      max-width: 98%;
      min-height: 500px;
    }
  }
  @media (max-width: 500px) {
    .container {
      background: #fff;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
      position: relative;
      overflow: hidden;
      width: 768px;
      max-width: 95%;
      min-height: 540px;
    }
    button {
      border-radius: 20px;
      border: 1px solid #ff4b2b;
      background: #ff4b2b;
      color: #fff;
      font-size: 12px;
      font-width: bold;
      padding: 10px 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
      cursor: pointer;
    }

    .form-container form {
      background: #fff;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .overlay-panel {
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      height: 100%;
      width: 50%;
      text-align: center;
      transform: translateX(0);
      transform: transform 0.6s ease-in-out;
    }
  }
`;

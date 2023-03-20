import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Validation from "../Validation";
import { connect } from "react-redux";
export const Register = (props) => {
    const nav = useNavigate();
    const [signForm, setSignForm] = useState({
        username:"",
        email: "",
        password: "",
        firstname: "",
      });
    
      const handleInput = (e) => {
        setSignForm({ ...signForm, [e.target.name]: e.target.value });
      };
      const onSubmit = async (e) => {
        e.preventDefault();
        const a = await fetch("http://127.0.0.1:8080/account/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username:signForm.username,
            email: signForm.email,
            password: signForm.password,
            firstname: signForm.firstname,
          }),
        })
          .then((a) => a.json())
          .then((a) => a);
        console.log(a);
        if (a.username == "A user with that username already exists.") {
          alert("username artiq istifade olunub");
          setSignForm({
            username:"",
            email: "",
            password: "",
            firstname: "",
          })
        }
        if (a.non_field_errors =="{'Bu email ile artiq qeydiyyatdan kecilib'}"){
            alert("Bu email artiq istifade olunub");
            setSignForm({
              username:"",
              email: "",
              password: "",
              firstname: "",
            })
        }
      };
     
      const [errors, setErrors] = useState({});
      function handleValidation(e) {
        e.preventDefault();
        setErrors(Validation(signForm));
      }
    return (
      
        <section className="login-page">
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
        className="login-inputt"
                onChange={handleInput}
                name="username"
                type="text"
                autoComplete="off"
                value={signForm.username}
                placeholder="Enter your username"
                id="username"
              />
            <label htmlFor="email">Email</label>
        <input
        className="login-inputt"
                onChange={handleInput}
                name="email"
                type="text"
                autoComplete="off"
                value={signForm.email}
                placeholder="Enter your work email"
                id="email"
              />
              {/* {errors.email && <p>{errors.email}</p>} */}
              {/* <p>gds</p> */}
              <label htmlFor="password">Password</label>
              <input
className="login-inputt"
                onChange={handleInput}
                name="password"
                type="password"
                value={signForm.password}
                placeholder="Password"
                id="password"
              />
              {/* {errors.password && <p>{errors.password}</p>} */}
              <label htmlFor="firstname">First Name</label>
              <input
className="login-inputt"
                onChange={handleInput}
                name="firstname"
                type="text"
                value={signForm.firstname}
                placeholder="Enter First Name"
                id="firstname"
              />
            {/* { errors.matchPassword && <p>{errors.matchPassword}</p>} */}
            <button className="login-button" type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => nav('/login')}>Already have an account? Login here.</button>
    </div>
    </section>
    )
}
const t = (a) => a
export default connect(t) (Register);
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function Login({dispatch}) {
  const nav = useNavigate();
  const [user, setUser] = useState({
    username: "nicat",
    password: "123",
  });
  const [error, setError] = useState("");
  const login = async (e) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8080/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((a) => {
        if (a.ok) {
          return a.json()
        }
        return Promise.reject(a)
      })
      .then((a) => {
        console.log(a)
        window.localStorage.setItem("access_token", a.tokens?.access);
        window.localStorage.setItem("user", a?.username);
        window.localStorage.setItem("user_id", a?.id);
        console.log(a.username)
        dispatch({
          type: "SET_USER",
          payload: a.username,  
        });
        nav("/");
      }
      ).catch(err => {
        alert('Username ya da şifrə yanlışdır')
       
      })
  };
  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      <Navigate path='/' />
    }
  }, [])


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
     
      <section className="login-page">
        <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-formm" onSubmit={login}>
          <label htmlFor="username">Username</label>
          <input
          className="login-inputt"
            onChange={handleChange}
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
            id="username"
          />
           <label htmlFor="password">Password</label>
          <input
          className="login-inputt"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
          id="password"
          />
          <button className="login-button">Login</button>
          {error && <p>{error}</p>}
        </form>
        <button className="link-btn" onClick={() => nav("/register")}>Don't have an account? Register here.</button>
       
        </div>
      </section>

    </>
  );
}
const t = (a) => a
export default connect(t)(Login);

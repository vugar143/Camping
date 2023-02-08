import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
function Login({ dispatch, tours }) {
  const nav = useNavigate();
  const [user, setUser] = useState({
    username: "nicat",
    password: "123",
  });
  const [error, setError] = useState("");
  const login = async (e) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8000/account/login", {
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
        window.localStorage.setItem("access_token", a.tokens?.access);
        dispatch({
          type: "SET_USER",
          payload: { ...a.username },
        });
        nav("/");
      }
      ).catch(err => {
        alert('User not found')
        console.log(err)
      })
  };
  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      <Navigate path='/' />
    }
  }, [])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/tour/tourlist/")
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_TOURS",
          payload: a.results,

        })
      })
  }, [])

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="login-page df">
        <form onSubmit={login}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
          />
          <button>Login</button>
          {error && <p>{error}</p>}
        </form>
        <div className="tours">
          {tours.map((a) => (
            <>
              <div>{a.name}</div>
              <div><img src={a.main_product_image} alt="" /></div>
            </>
          ))}

        </div>
      </section>

    </>
  );
}
const t = (a) => a
export default connect(t)(Login);

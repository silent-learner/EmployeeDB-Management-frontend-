import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isloggedin, setisloggedin }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (isloggedin === true) {
          // eslint-disable-next-line
          navigate("/");
        }
  }, [isloggedin,navigate]);
  const [input, setinput] = useState({});
  const [message, setmessage] = useState("");
  const handleonsubmit = (e) => {
    e.preventDefault()
    if(input.email === process.env.REACT_APP_ADMIN_EMAIL && input.password === process.env.REACT_APP_ADMIN_PASSWORD){
        setisloggedin(true)
        navigate('/')
    }else{
        setmessage('Wrong Credentials!!!')
        setTimeout(() => {
            setmessage('')
        }, 2000);
    }
  }
  return (
    <div
      className="container border p-2 mt-4  bg-white shadow shadow-lg"
      style={{ maxWidth: "500px"}}
    >
      <h2 className="text-center mt-3">Login</h2>
      <form onSubmit={handleonsubmit}>
        <p className="text-center text-danger">{message}</p>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            passwordaria-describedby="emailHelp"
            required
            onChange={(e) => {
                setinput({...input,email:e.target.value})
            }}
            value={input.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            onChange={(e) => {
                setinput({...input,password:e.target.value})
            }}
            value={input.password}
            minLength={5}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mx-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

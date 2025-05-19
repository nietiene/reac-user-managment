import { useState, useEffect } from "react";
import { data, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

     try {
        const res = await axios.get("http://localhost:3000/login", {name, password}, {withCredentials: true}); 

        if (res.data === "Welcome Admin!") {
            alert("Logged In as Admin");
            navigate('/admin');
        } else {
            alert("Login Successfully");
            name('/dashboard')
        }
     } catch (err) {
        setError(err.response?.data || "Login Failed");
     }
  }

  return (
    <div>
        <h1>Login</h1>
        {err && <p style={{ color: 'red'}}>{error}</p>}

        <form onSubmit={handleLogin} method="post">
            <label htmlFor="">Name</label>
            <input type="text" name="name" placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            /> <br />

            <label htmlFor="">Password</label>
            <input type="text" name="password" placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            /> <br />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login
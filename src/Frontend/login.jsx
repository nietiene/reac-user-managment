import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();

      if (!name || !password) {
        setError("Both name and password are required");
        return;
      }
     try {
        const res = await axios.post("http://localhost:3000/login", {name, password}, {withCredentials: true}); 
        if (res.data.error) {
           setError(res.data.error);
        
        } else if (res.data.role === "admin") {
            alert("Logged In as Admin");
            navigate('/admin'); 
          
     } else {
           alert('Login successfully');
           navigate('/dashboard');
     }
    }catch (err) {
        setError("Login Failed");
     }
  }

  return (
    <div>
        <h1>Login</h1>
        {error && <p style={{ color: 'red'}}>{error}</p>}

        <form onSubmit={handleLogin} method="post">
            <label htmlFor="">Name</label>
            <input type="text" name="name" placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            /> <br />

            <label htmlFor="">Password</label>
            <input type="password" name="password" placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            /> <br />

            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login
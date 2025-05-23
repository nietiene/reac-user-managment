import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {  
        setLoading(true);
        const res = await axios.post("http://localhost:3000/register", {name, password});
        setMessage(res.data.message);
        setLoading(false);
        setName("");
        setPassword("");
        navigate('/login');
        } catch (err) {
            setLoading(true);
            setError(res.data.error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <div>Loading......</div>
    if (error) return <div>{error.message}</div>

    return (
        <div>
            <form onSubmit={handleRegister} method="post">
                <h2>Create Account</h2>
                <label htmlFor="">Name</label>
                <input type="text" name="name" 
                onChange={(e) => setName(e.target.value)} /> <br />
                <label htmlFor="">Password</label>
                <input type="password" name="password"
                onChange={(e) => setPassword(e.target.value)}
                /> <br />

                <button>Register</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}

export default Register;
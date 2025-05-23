import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Insert = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

   const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage("");

    try {
        const res = await axios.post("http://localhost:3000/add", { name, password, role });
        setMessage("User Added Successfully");
        setName("");
        setPassword("");
        navigate('/api/users');
    } catch (err) {
        setError("Something went wrong");
    } finally {
        setLoading(false);
    }
   };

   return (
    <div>
        <h2>Add New User</h2>
        <form onSubmit={handleAdd} method="post">
        
         <label htmlFor="">Name</label>
         <input type="text" name={name} 
         onChange={(e) => setName(e.target.value)}
         required
         /> <br />

         <label htmlFor="">Password</label>
         <input type="password" name={password} 
         onChange={(e) => setPassword(e.target.value)}
         required
         /> <br />
         <label htmlFor="">Role of user in system</label> <br />
       <select name="role" onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
       </select> <br />

         <button disabled={loading}>
            {loading ? "Adding..." : "Add User"}
         </button> <br />
        <Link to="/api/users">Cancel</Link>
        </form>
        {message && <p style={{color: 'green'}}>{message}</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
   )
}

export default Insert
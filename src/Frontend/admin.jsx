import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate();

   const handleLogout = async() => {
    try {
      await axios.get('http://localhost:3000/logout', {withCredentials: true});
      alert("Looged Out successfully");
      navigate('/login');
     } catch (err) {
        console.error("Logout failed", err);
     }
   } 

   return (
    <div>
        <h2>Welcome Admin You can manage Users</h2>
        <Link to="/api/users">Manage Users</Link>
        <button onClick={handleLogout}>Logout</button>
    </div>
   )
}

export default AdminPage;
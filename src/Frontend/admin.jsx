import axios from "axios";
import { useState } from "react";
import { UNSAFE_decodeViaTurboStream, useNavigate } from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate();

   const handleLogout = async() => {
    try {
      const res = await axios.get('http://localhost:3000/logout', {}, {withCredentials: true});
      alert("Looged Out successfully");
      navigate('/login');
     } catch (err) {
        console.error("Logout failed", err);
     }
   } 

   return (
    <div>
        <h2>Welcome Admin You can manage Users</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
   )
}

export default AdminPage;
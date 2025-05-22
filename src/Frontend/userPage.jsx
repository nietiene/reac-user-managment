import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { id } = useParams();
    useEffect(() => {
        const handleUserPage = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:3000/user/${id}`, {withCredentials: true});
                setUser(res.data.user);
                setLoading(false)
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        }
        handleUserPage();
    }, [id]);

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading.....</div>
  if (!user || user.length === 0) return <div>No user found</div>;


  return (
    <div>       
             <li>Name:{user.name}</li>
             <li>Password:{user.password}</li>
         
    </div>
  )
}

export default UserPage;
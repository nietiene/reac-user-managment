import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserPage = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { id } = useParams();
    useEffect(() => {
        const handleUserPage = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:3000/user/${id}`, {withCredentials: true});
                setUser(res.data);
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


  return (
    <div>
      
            {user.map((user) => (
                  <ul key={user.id}>
                    <li>Name:{user.name}</li>
                    <li>Password:{user.passwrod}</li>
                  </ul>
            ))}
       
    </div>
  )
}

export default UserPage;
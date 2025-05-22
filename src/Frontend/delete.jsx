import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const Delete = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
    const deleteUser = async () => {
        setLoading(true);
        try {
           const res = await axios.get(`http://localhost:3000/admin/delete/${id}`, {withCredentials: true});
           setMessage(res.data.message);
           setLoading(false);
           navigate('/api/users');
        } catch (err) {
            setError(err.data.message);
        } finally {
            setLoading(false);
        }
    }
    deleteUser();
   }, [id]);

   if (error) return <div style={{ color: 'red'}}>{error}</div>
   if (loading) return <div style={{color: 'green'}}>Deleting...</div>
   if (message) return <div>{message}</div>
}

export default Delete
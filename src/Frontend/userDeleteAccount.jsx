import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDelete = () => { 
    const [loading, setlaoding] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const { id }= useParams();

  useEffect(() => {
    const handleDeleteAccount = async () => {
       try { 
          setlaoding(true);
          const res = await axios.get(`http://localhost:3000/dlt/${id}`, {withCredentials: true});
          setMessage(res.data.message);
          navigate('/login');

         } catch (err) {
            setlaoding(true);
            setError(res.message.error);
            setlaoding(false);
         } finally {
            setlaoding(false);
         }
    }
    handleDeleteAccount();
    }, [id]);

    {loading ? "Deleting..." : "Deleted"};
    if (error) return <div>{error}</div>
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default UserDelete;
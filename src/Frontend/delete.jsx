import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const Delete = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
        setLoading(true);
        try {
           const deleteUser = axios.get(`http://localhost:3000/${id}`, {withCredentials: true});
           setMessage(deleteUser.data.message);
           setLoading(false);
           navigate('/');
        } catch (err) {
            setError(deleteUser.data.message);
        } finally {
            setLoading(false);
        }
    
   });
}

export default Delete
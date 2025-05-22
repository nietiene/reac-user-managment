import { useState , useEffect} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const Update = () => {
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // pushing codes
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const updateUser = async () => {
         try {
            const res = await axios.get(`http://localhost:3000/admin/update/${id}`, {withCredentials: true});
            setPassword(res.data.user.password);      
            setName(res.data.user.name);      
            } catch (err) {
              setError("User Not found");
            }

        };
     updateUser();
    }, [id]) // make user updated to each code
    const HandleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true); // start loading if user clicks on button
        setError(null);
        try {
        const update = await axios.post(`http://localhost:3000/admin/update/${id}`, {
            name,
            password,
        }, { withCredentials: true });

        setMessage(update.data.message);
        navigate('/api/users');
    }catch (err) {
        setError("Update failed");
    } finally {
        setLoading(false)
    }
}


return (
    <div>
        <h2>Update User</h2>
        <form onSubmit={HandleUpdate} method="post">
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={name} 
            onChange={(e) => setName(e.target.value)}
            /> <br />

            <label htmlFor="">Password</label>
            <input type="password" name="password" value={password} 
            onChange={(e) => setPassword(e.target.value)}
            /> <br />
          
          <button disabled={loading}>
            {loading ? "Updating" : "Update"}
          </button>

        </form>
    {error && <p style={{ color: "red" }}>{error}</p>} 
    {message && <p style={{ color: "green" }}>{message}</p>} 
    <Link to="/">Back</Link>
    </div>
)
}

export default Update
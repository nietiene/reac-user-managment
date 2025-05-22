import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const UpdateUserPage = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();
    
    const { id } = useParams();
    useEffect(() => {
        const FetchUserData = async (e) => {
         e.preventDefault();
          try {  
            setLoading(true);
            const res = await axios.get(`http://localhost:3000/user/update/${id}`, {withCredentials: true});
            setName(res.data.name);
            setPassword(res.data.password);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.respones?.data?.error || err.message)
        }
        }

        FetchUserData();   
       
 }, [id]);

 
        const HandleUpdateLogic = async () => {
            try {
                setLoading(true);
                await axios.post(`http://localhost:3000/user/update/${id}`, {name, password}, {withCredentials: true});
                setLoading(false);
                navigate(`/user/user/${id}`);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        }
 if (error) return <div>{error}</div>
 if (loading) return <div>Loading......</div>
 return (
    <div>
        <form onSubmit={HandleUpdateLogic} method="post">
           <label>Name</label>
           <input type="text" name="name" 
           onChange={(e) => setName(e.target.value)}
           value={name}
           /> <br />

           <label>Password</label>
           <input type="password" name="password" 
           onChange={(e) => setPassword(e.target.value)}
           value={password}
           /> <br />
      
          <button onClick={HandleUpdateLogic}>{loading ? "Updating..." : "Update"}</button>
          <Link to={`/user/user/${id}`}></Link>
        </form>
    </div>
 )
}

export default UpdateUserPage;
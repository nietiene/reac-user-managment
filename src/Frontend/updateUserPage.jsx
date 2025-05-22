import { useState, useEffect, use } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateUserPage = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const { id } = useParams();
    useEffect(() => {
        const FetchUserData = async()=> {
          try {  
            setLoading(true);
            const res = await axios.get(`http://localhost:3000/update/${id}`, {withCredentials: true});
            setName(res.data.name);
            setPassword(res.data.password);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message)
        }
        }

        FetchUserData();   
 }, [id]);

 if (error) return <div>{error}</div>
 if (loading) return <div>Loading......</div>
 return (
    <div>
        <label htmlFor="">Name</label>
        <input type="text" name="name" 
        onChange={(e) => setName(e.target.value)}
        value={name}
        /> <br />

        <label htmlFor="">Password</label>
        <input type="passwrod" name="passwrod" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        /> <br />
      
      <button>Update</button>
      <Link to={`/user/${id}`}></Link>
    </div>
 )
}

export default UpdateUserPage;
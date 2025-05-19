import { useState, useEffect } from "react";
import axios from "axios";

const Frontend = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/api/users', {withCredentials: true})
        .then((resp) => {
            setLoading(false);
            setUser(resp.data);
        }).catch (err =>{
            setLoading(false);
            setError(err);
            });
    }, []);

 if (error) return <div>{error.message}</div>
 if (loading) return <div>Loading.....</div>

 return (
    <div>
         <table border={2}>
         <thead>
            <tr>            
              <th>id</th>
              <th>Name</th>
              <th>Password</th>
            </tr>
         </thead>
            {user.map((user) => (
                <>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.password}</td>
              </tr>
                </>
            ))}
         </table>
    </div>
 )

}

export default Frontend;
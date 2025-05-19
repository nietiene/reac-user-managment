import { useState, useEffect } from "react";
import axios from "axios";

const Frontend = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/')
        .then((res) => {
            setUser(res.data);
        }).catch ((err) => setError(err.message));
    });

 if (err) return <div>{error}</div>
 if (loading) return <div>Loading.....</div>

 return (
    <div>
         <table>
            <tr>

            
            <th>id</th>
            <th>Name</th>
            <th>Password</th>

            {user.map((user) => (
                <>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.password}</td>
                </>
            ))}
            </tr>
         </table>
    </div>
 )

}

export default Frontend;
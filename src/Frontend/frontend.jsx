import { useState, useEffect } from "react";
import axios from "axios";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <h1>List of user</h1>
        <Link to="/insert">Add New</Link>
         <table border={2} cellPadding={5} cellSpacing={2}>
         <thead>
            <tr>            
              <th>id</th>
              <th>Name</th>
              <th>Password</th>
              <th colSpan={2}>Operation</th>
            </tr>
         </thead>
            {user.map((user) => (
                <>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.password}</td>
                    <td><Link to={`/update/${user.id}`}>Update</Link></td>
                    <td><Link to={`/delete/${user.id}`}>Delete</Link></td>
              </tr>
                </>
            ))}
         </table>
    </div>
 )

}

export default Frontend;
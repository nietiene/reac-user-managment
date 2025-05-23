import { useState, useEffect } from "react";
import axios from "axios";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Frontend = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/api/users', {withCredentials: true})
        .then((resp) => {
            setLoading(false);
            setUser(resp.data);
        }).catch (err =>{
            setLoading(false);
           if (error.response) {
            if (err.response.status === 403) {
                setError({message: "Access Denied (Admin only.)"});
            } else if (err.response.status === 401) {
                setError({ message: "Unauthorized: please login first"});
            } else {
                setError({ message: err.response.data.message || "Some thing"})
            }
           }
            });
    }, []);

    
    const handleLogout = async () => {
        await  axios.get('http://localhost:3000/logout', {withCredentials: true})
        navigate('/login');
    };


 if (error && error.message === "Access Denied (Admin only.)") {
    return  <div><h2>{error.message}</h2></div>
 }   
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
                    <td><Link to={`/admin/update/${user.id}`}>Update</Link></td>
                    <td><Link to={`/admin/delete/${user.id}`}>Delete</Link></td>
              </tr>
                </>
            ))}
         </table>
       <button onClick={handleLogout}>Logout</button>
    </div>
 )

}

export default Frontend;
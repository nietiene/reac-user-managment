import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/session', {withCredentials: true})
        .then ((res) => {
            if (res.data.loggedIn) {
                setUser(res.data.user);
            } else {
                navigate('/login');
            }
        })
    }, []);

    const handleLogout = async () => {
        await  axios.get('/http://localhost:3000/logout', {}, {withCredentials: true})
        navigate('/login');
    };


    return (
        <div>
            <h2>User Dashboard</h2>
            {user && <p>Welcome, {user.name} (Role: {user.role})</p>}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
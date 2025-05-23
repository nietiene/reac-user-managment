import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Frontend from "./Frontend/frontend"
import Insert from "./Frontend/insert"
import Update from "./Frontend/update"
import Delete from "./Frontend/delete"
import Dashboard from "./Frontend/dashboard"
import Login from "./Frontend/login"
import AdminPage from "./Frontend/admin"
import UserPage from "./Frontend/userPage"
import UpdateUserPage from "./Frontend/updateUserPage"
import UserDelete from "./Frontend/userDeleteAccount"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/api/users" element={ <Frontend/> }/>
        <Route path="/insert" element={ <Insert />}/>
        <Route path="/admin/update/:id" element={ <Update />}/>
        <Route path="/admin/delete/:id" element={ <Delete />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user/user/:id" element={<UserPage />} />
        <Route path="/user/update/:id" element={<UpdateUserPage/>} />
        <Route path="/dlt/:id" element={<UserDelete />}/>
      </Routes>
    </Router>
  )
}

export default App

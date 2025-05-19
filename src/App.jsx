import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Frontend from "./Frontend/frontend"
import Insert from "./Frontend/insert"
import Update from "./Frontend/update"
import Delete from "./Frontend/delete"
import Dashboard from "./Frontend/dashboard"
import Login from "./Frontend/login"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Frontend/> }/>
        <Route path="/insert" element={ <Insert />}/>
        <Route path="/update/:id" element={ <Update />}/>
        <Route path="/delete/:id" element={ <Delete />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App

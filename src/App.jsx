import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Frontend from "./Frontend/frontend"
import Insert from "./Frontend/insert"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Frontend/> }/>
        <Route path="/insert" element={ <Insert />}/>
      </Routes>
    </Router>
  )
}

export default App

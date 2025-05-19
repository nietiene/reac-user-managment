import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Frontend from "./Frontend/frontend"
import Insert from "./Frontend/insert"
import Update from "./Frontend/update"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Frontend/> }/>
        <Route path="/insert" element={ <Insert />}/>
        <Route path="/update/:id" element={ <Update />}/>
      </Routes>
    </Router>
  )
}

export default App

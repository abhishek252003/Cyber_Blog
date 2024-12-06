import { BrowserRouter,Route,Routes } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Project from "./pages/Project"


export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
    </Routes>

  </BrowserRouter>
  )
}

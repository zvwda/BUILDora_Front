import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import ProjectsPage from "./components/ProjectsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  )
}

export default App

import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectsPage from "./components/ProjectsPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;

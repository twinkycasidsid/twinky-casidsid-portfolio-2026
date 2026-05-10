import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} 
        />
        <Route 
          path="/projects" 
          element={<ProjectsPage isDarkMode={isDarkMode} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

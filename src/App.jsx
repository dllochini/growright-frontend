import "./App.css";
import Dashboard from "./views/Dashboard.jsx";
import Home from "./views/Home.jsx";
import NoPage from "./views/NoPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;

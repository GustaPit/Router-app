import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contador from "./pages/Contador";
import Usuarios from "./pages/Usuarios";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Contador">Contador</Link>
          <Link to="/Usuarios">Usuários</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contador" element={<Contador />} />
          <Route path="/Usuarios" element={<Usuarios />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

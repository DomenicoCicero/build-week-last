import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  return (
    <BrowserRouter>
      <MyNavbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

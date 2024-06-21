import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Side from "./components/Side/Side";
import Header from "./components/Header/Header";
import Ticket from "./components/Ticket/Ticket";
import DashBoard from "./components/DashBoard/DashBoard";
import Analytics from "./components/Analytics/Analytics";
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import other components for routes

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Simulate login process
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <ToastContainer />
        {isAuthenticated ? (
          <>
            <Header />
            <div className="main-content flex">
              <Side />
              <div className="flex-1 overflow-y-auto">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/ticket" element={<Ticket />} />
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/analytics" element={<Analytics />} />
                  {/* Define other routes here */}
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;

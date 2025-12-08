import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { userLoggedIn, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to={userLoggedIn ? "/Homepage" : "/"}>Ghar Cook</Link>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        &#9776;
      </button>

      <ul className={open ? "menu active" : "menu"}>
        {userLoggedIn ? (
          <>
            <li><Link to="/Homepage">Home</Link></li>
            <li><Link to="/Find">Find Cooks</Link></li>
            {/* <li><Link to="/book slot">Book Slot</Link></li> */}
            {/* <li><Link to="/Profile">My Profiles</Link></li> */}
            <li><Link to="/Pricing">Pricing</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/CookRegister">CookRegister</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>

    </nav>
  );
}

export default Navbar;

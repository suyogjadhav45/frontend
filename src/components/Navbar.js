import React from 'react'
import { Link } from 'react-router-dom'
import { FaBell, FaCog, FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-date">
                Date : {new Date().toLocaleDateString()}
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Search Order" />
            </div>
            <div className="navbar-icons flex">
                <Link to="/Notification" className="heading">
                    <FaBell size={22} style={{ color: "white" }} alt="notification" />
                </Link>
                <Link to="/Settings" className="heading">
                    <FaCog size={22} style={{ color: "white" }} alt="settings" />
                </Link>
                <Link to="/User" className="heading">
                    <FaUser size={22} style={{ color: "white" }} alt="user" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
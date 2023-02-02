import React from "react";
import Logo from "../airbnb1.png"

export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={Logo} alt="airbnb logo" className="navbar--logo" />
        </nav>
    )
}
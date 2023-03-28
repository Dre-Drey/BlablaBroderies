import React from "react";
import BlablaLogo from "../assets/Blabla_logo.png";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <div className="blabla-navbar">
            <div className="blabla-logo">
        <img src={BlablaLogo}></img>
        <h1>Blabla Broderies</h1>
        </div>
        <div className="blabla-navig">
        <h2>Collections</h2>
        <h2>Commander</h2>
        <h2>About</h2>
        </div>
        </div>
    )
}
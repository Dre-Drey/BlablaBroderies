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
        <a><h2>Collections</h2></a>
        <a><h2>Commander</h2></a>
        <a><h2>About</h2></a>
        </div>
        </div>
    )
}
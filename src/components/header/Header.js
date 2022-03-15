import React from "react"
import './header.css'

export default function Header() {
    return (
        <nav className="navbar">
            <img id="globe--icon" src="../images/globe.svg" alt="earth icon"></img>
            <h3>my Travel Journal.</h3>
        </nav>
    )
}
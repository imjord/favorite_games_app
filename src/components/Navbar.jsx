import React from "react";
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav>
            <div className="left">
                <h1>My Favorite Games</h1>
            </div>
            <div className="right">
    
                <FontAwesomeIcon id="icon" icon={faCirclePlus} />
                <span>Add a Game</span>
            </div>
        </nav>
    )
}

export default Navbar;
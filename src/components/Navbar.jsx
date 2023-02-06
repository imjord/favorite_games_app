import React, {useState} from "react";
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { invoke } from "@tauri-apps/api/tauri";
import Programs from "./Programs";


const Navbar = (props) => {
const {showPrograms, setShowPrograms} = props;
async function addGame() {
    setShowPrograms(!showPrograms);
    await invoke("add_game");
}

    return (
        <nav>
            <div className="left">
                <h1>My Favorite Games</h1>
            </div>
            <div className="right">
    
                <FontAwesomeIcon id="icon" icon={faCirclePlus} />
                <span onClick={addGame}>Add a Game</span>
            </div>
        </nav>
    )
}

export default Navbar;
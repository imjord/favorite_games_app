import React, {useEffect} from "react";
import { invoke } from "@tauri-apps/api/tauri";

import Draggable from "react-draggable";
import "./Programs.css"

const Programs = (props) => {
    const {showPrograms, setShowPrograms} = props;

    // make the programs container draggable
    
    const closeModal = () => {
        setShowPrograms(!showPrograms); 
    }

    useEffect(() => {
        invoke("get_installed_programs").then((programs) => {
            console.log(programs);
        });
    })
    
    return (
        <div className="programs-container">
        <div className="programs-title">
        <h2>Add a game</h2>
        <span onClick={closeModal}>X</span>
        </div>
        <span id="span"><h3>Select a program to add it to your Favorite Games List</h3></span>
        <div className="programs-list">
            <div className="programs-list-header">
                {/* checkmarkbox */}
                <input type="checkbox" />
                <h3>Programs</h3>
                <h3>Path</h3>
                </div>
                <div className="programs-list-item">
                    <input type="checkbox" />
                    <h3>Program name:</h3>
                    <h3>C://</h3>
                    </div>
                    <div className="programs-list-item">
                    <input type="checkbox" />
                    <h3>Program name:</h3>
                    <h3>C://</h3>
                    </div>
                    <div className="programs-list-item">
                    <input type="checkbox" />
                    <h3>Program name:</h3>
                    <h3>C://</h3>
                    </div>
                    <div className="programs-list-item">
                    <input type="checkbox" />
                    <h3>Program name:</h3>
                    <h3>C://</h3>
                    </div>
                    <div className="programs-list-item">
                    <input type="checkbox" />
                    <h3>Program name:</h3>
                    <h3>C://</h3>
                    </div>
                    <div className="programs-list-item">
                    <input type="checkbox" />
                    <h3>Program name:</h3>
                    <h3>C://</h3>
                    </div>
                    <div className="programs-list-item">
                    <input type="checkbox" />
                    <h3>Program name:</h3>
                    <h3>C://</h3>
                    </div>
                    <div className="programs-list-item">
                    <input type="checkbox" />
                    <h3>Program name:</h3>
                    <h3>C://</h3>
                    </div>
                    <div className="programs-list-item">
                    <input type="checkbox" />
                    <h3>Program name:</h3>
                    <h3>C://</h3>
                    </div>
            </div>
        <div className="program-buttons">
            <button>Browse</button>
            <button>Add Selected Programs</button>
            <button onClick={closeModal}>Cancel</button>
        </div>
    </div>
       
    )
};

export default Programs;
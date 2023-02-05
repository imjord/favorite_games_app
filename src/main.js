const { invoke } = window.__TAURI__.tauri;

let gameArray = [];
let gameNameEl;
let gameLauncherEl;
let openFileEl = document.getElementById("open-file");; 



function openFile(){
    invoke("get_games_exe");
}


openFileEl.addEventListener("click", openFile);
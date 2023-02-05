#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use std::process::Command;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command] 
fn get_games_exe(){
    // check the users os and open the following folder directory
    if cfg!(target_os = "windows") {
        Command::new("explorer").spawn().expect("Failed to open Windows Explorer");
    } else if cfg!(target_os = "linux") {
        Command::new("xdg-open").spawn().expect("Failed to open linux explorer (sorry idk the name).");
    } else if cfg!(target_os = "macos") {
        Command::new("open").spawn().expect("Failed to open files folder");
    }
}




fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_games_exe])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

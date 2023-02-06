#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::api::dialog::*;


#[tauri::command]
//  create a directory in users c:// to save games that will get this list on startup
fn create_dir() {
    let path = std::path::Path::new("C:\\Users\\Public\\MyFavoriteGames");
    std::fs::create_dir_all(path).unwrap();
}

#[tauri::command]
fn get_installed_programs(){
    //  go to the directory for programfiles86 and filter out the folders and return all the exe files
    let path = std::path::Path::new("C:\\Program Files (x86)");
    let mut programs = std::fs::read_dir(path).unwrap();
    for program in programs {
        let program = program.unwrap();
        let program = program.path();
        let program = program.to_str().unwrap();
        println!("{}", program);
    }
}
fn main() {
    create_dir();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_installed_programs])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

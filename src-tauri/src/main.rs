#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn GetAllPrograms() -> Vec<String> {
    let mut programs = Vec::new();
    for entry in std::fs::read_dir("C:\\Program Files").unwrap() {
        let entry = entry.unwrap();
        let path = entry.path();
        programs.push(path.to_str().unwrap().to_string());
    }
    programs
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![GetAllPrograms])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

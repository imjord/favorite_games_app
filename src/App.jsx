import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import Navbar from "./components/Navbar";
import "./App.css";
import Programs from "./components/Programs";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [showPrograms, setShowPrograms] = useState(false);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <Navbar showPrograms={showPrograms} setShowPrograms={setShowPrograms} />
      <div className="App">
        <h1>Games</h1>
        {showPrograms ? ( <Programs showPrograms={showPrograms} setShowPrograms={setShowPrograms} /> ) : null}
        </div>
    </>
  );
}

export default App;

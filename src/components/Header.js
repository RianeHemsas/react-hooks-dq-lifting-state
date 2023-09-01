import React, { useState } from "react";
import Menu from "./Menu";

function Header({darkMode,setDarkMode}) {
  // const [darkMode, setDarkMode] = useState(false);
// function handle(){
//   setDarkMode((darkMode)=>!darkMode);
// }

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </div>
  );
}

export default Header;

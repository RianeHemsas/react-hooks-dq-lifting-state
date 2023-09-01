import React from "react";

function DarkModeWrapper({darkMode,children}) {
  // function handleToggle(){
  //  setDarkMode((darkMode)=>!darkMode)
  // }
  return (
    // <div id="wrapper" className={darkMode ?setDarkMode: "dark-mode " }>
    <div id="wrapper" className={darkMode ? "dark-mode" : ""}> 
  
      {children}
    </div>
  );
}

export default DarkModeWrapper;

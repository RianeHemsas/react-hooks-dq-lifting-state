import React from "react";

function Menu({darkMode,setDarkMode}) {
  
  function handleOnChange(){
    setDarkMode((darkMode)=>!darkMode)
  }
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={darkMode}
          // onChange={() => console.log("toggle")}
          onChange={handleOnChange}

        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;

import React, {useState} from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>{
      currentForm === "login"? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
    </>
  );
}

export default App;

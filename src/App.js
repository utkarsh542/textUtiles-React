import "./App.css";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextForm";
import React, { useState } from "react";
import Aleart from "./component/Aleart";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import About from "./component/About";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(2 28 70)";
      showAleart("Dark Mode is on", "primary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAleart("Light Mode is on", "success");
    }
  };
  let showAleart = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
     <>
     <Router>
      <Navbar
        Title="Text Utiles"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Aleart alert={alert} />
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextFrom
              mode={mode}
              showAleart={showAleart}
              heading="Enter Your Text To Analyse Below"
            />
          </Route>
        </Switch>

     
      </div>
      </Router>
      </>
  );
}

export default App;

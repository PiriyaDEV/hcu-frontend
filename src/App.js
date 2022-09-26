import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/page.css";

import Mainpage from "./pages/Mainpage.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div className="App">
            <Navbar />
            <Mainpage />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

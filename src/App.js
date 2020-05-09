import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Country from "./pages/Country/Country";

import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (  
    <div className="App">
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/:id" component={Country} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

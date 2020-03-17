import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Country from "./pages/Country/Country";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (  
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/country/:id" component={Country} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Country from "./pages/Country/Country";
import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<Country />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;

import React from "react";
import { Brand, CTA, Navbar } from "./components";
import {
  Blog,
  Features,
  Header,
  Footer,
  Possibilities,
  WhatGPT3,
} from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

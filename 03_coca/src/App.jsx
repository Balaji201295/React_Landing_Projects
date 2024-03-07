import React from "react";
import {
  About,
  Brands,
  CTA,
  FAQ,
  Features,
  Footer,
  Header,
  Navbar,
  Strategies,
  Teams,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <div className="app__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <Features />
      <About />
      <Strategies />
      <Teams />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

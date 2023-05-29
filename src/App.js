import {
  Footer,
  Blog,
  Possibity,
  Feature,
  WhatGBT3,
  Header,
} from "./container";

import { CTA, Brand, Navbar } from "./components";

import "./App.css";

function App() {
  return (
    <div className="" App>
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGBT3 />
      <Feature />
      <Possibity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

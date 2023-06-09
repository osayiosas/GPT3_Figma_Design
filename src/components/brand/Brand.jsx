import React from "react";
import { google, slack, shopify,atlessian,dropbox } from "./import";
import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google}  alt="google"/>
    </div>
    <div>
      <img src={slack} alt="slcak" />
    </div>
    <div>
      <img src={atlessian} alt="atlessian"/>
    </div>
    <div>
      <img src={dropbox} alt="dropbox"/>
    </div>
    <div>
      <img src={shopify} alt="shopify" />
    </div>
  </div>
);

export default Brand;

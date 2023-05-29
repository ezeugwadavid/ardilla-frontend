import React, { useState } from "react";
import Zikoko from "../../assets/zikoko.svg";
import TechCrunch from "../../assets/TechCrunch.svg";
import Guardian from "../../assets/guardian.svg";
import PressReview from "../../assets/press-reviews.svg";
import WebScreenShot from "../../assets/web-screenshot.svg";
import { PartnersContainer } from "./partners.styles";

const Partners = () => {
  return (
    <PartnersContainer>
      <div className="partner-content">
        <div className="partners">
          <img className="part-logo" src={Zikoko} alt="" />
          <img className="part-logo" src={TechCrunch} alt="" />
          <img className="part-logo" src={Guardian} alt="" />
          <div className="vr"></div>
          <img className="part-logo" src={PressReview} alt="" />
        </div>

        <div className="screen-shot-box">
          <div className="screen-shot-desc">Also Available on the Web</div>
          <div className="screen-text">
            Increase your bread & butter on the app or on the web.The Ardilla
            app services are also available on the web.
          </div>
          <img className="web-shot" src={WebScreenShot} alt="" />
        </div>
      </div>
    </PartnersContainer>
  );
};

export default Partners;

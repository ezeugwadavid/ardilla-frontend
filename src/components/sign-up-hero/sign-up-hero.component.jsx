import React from "react";
import { SignUpHeroContainer } from "./sign-up-hero.styles";
import MenuRightIcon from "../../assets/menu-left-icon.svg";
import ArdillaIcon from "../../assets/ardilla-logo.svg";
import RightMobile from "../../assets/right-mobile.svg";
import LineBended from "../../assets/line-bended.svg";
import Plane from "../../assets/plane.svg";

const SignUpHero = () => {
  
  return (
    <SignUpHeroContainer>
        <div className="top">
            <img className="left-sign" src={ArdillaIcon} alt="" />
            <div className="right-sign"><span className="dot">.</span> Features</div>
        </div>
        <div className="page-content">
            <div className="left-hero">
                <div className="bold">Your portal to more</div>
                <img src={LineBended} alt="" />
                <div className="hero-content">Wealth building is possible. You just need the right partner. With better financial tools, Ardilla has made it so much easier for you to start building wealth. Take advantage of the Ardilla platform by signing up with your email address.</div>

                <div className="input">
                    <input className="input-field" placeholder="someone@example.com" type="text" />
                    <div className="input-btn">
                        <div className="input-text">AccessMore</div>
                        <img className="plane" src={Plane} alt="" />
                    </div>
                </div>

            </div>
        </div>
            <img className="right-mobile" src={RightMobile} alt="" />
        
    </SignUpHeroContainer>
  );
};

export default SignUpHero;

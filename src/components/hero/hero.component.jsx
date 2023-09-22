import React from "react";
import { HeroContainer } from "./hero.styles";
import Phone from "../../assets/phone.svg";
import Button from "../button/button.component";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-text">Your Access To More</div>
      <div className="desc">
        {" "}
        Ardilla helps you save and invest in achieving your financial goals, we
        have the most flexible and seamless way to grow your funds.
      </div>
      <NavLink className="nav-link"  to="/sign-up"><Button className="hero-btn">Get Started</Button></NavLink> 
      <img className="phone" src={Phone} alt="" />
    </HeroContainer>
  );
};

export default Hero;

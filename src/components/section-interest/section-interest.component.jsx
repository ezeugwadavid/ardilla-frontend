import React, { useState } from "react";
import { SectionInterestContainer } from "./section-interest.styles";
import Button from "../button/button.component";
import InterestImage from "../../assets/interest-image.svg";

const SectionInterest = () => {
  
  return (
    <SectionInterestContainer>
        <div className="left-interest">
            <div className="interest-hero1">We’re Keen On</div>
            <div className="interest-hero2">Transparency</div>
            <div className="interest-text"> Calculate your interests everytime you save on our platform</div>
            <Button className="interest-btn" bgColor="#8807F7" color="#ffffff">Get Started</Button>
        </div>
            <img className="right-interest" src={InterestImage} alt="" />
    
       
    </SectionInterestContainer>
  );
};

export default SectionInterest;

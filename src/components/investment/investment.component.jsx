import React, { useState } from "react";
import { InvestmentContainer } from "./investment.styles";
import ArrowIcon from "../../assets/arrow.svg";
import ArrowBlueIcon from "../../assets/Arrow-blue.svg";
import FlyIcon from "../../assets/fly-icon.svg";
import ButtonIcon from "../button-icon/button-icon.component";

const Investment = () => {
  return (
    <InvestmentContainer>
      <div className="interest-content">
        <div className="interest-heading">
          <div className="top-text">
            <div className="left-text">Unlimited</div>
            <div className="right-text">Investment</div>
          </div>
          <div className="bottom-text">Opportunities</div>
        </div>
        <div className="investment-phrase">
          Plan towards your future by investing with ardilla, Grow your money
          confidently and securely with the available investment oppurtuinities
        </div>
        <ButtonIcon className="investment-btn">
          Invest with ardilla (Coming Soon)
        </ButtonIcon>
      </div>
      <div className="arrow">
        <img className="arrow-green" src={ArrowIcon} alt="" />
        <img className="arrow-blue" src={ArrowBlueIcon} alt="" />
      </div>
    </InvestmentContainer>
  );
};

export default Investment;

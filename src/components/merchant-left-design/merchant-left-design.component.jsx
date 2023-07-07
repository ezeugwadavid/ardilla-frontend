import React from "react";
import { MerchantLeftDesignContainer } from "./merchant-left-design.styles";
import LeftDesign from "../../assets/left-design.svg";

const MerchantLeftDesign = () => {
  
  return (
    <MerchantLeftDesignContainer>
      <img className="design-box" src={LeftDesign} alt="" />
    </MerchantLeftDesignContainer>
  );
};

export default MerchantLeftDesign;

import React from "react";
import { MerchantSignup1Container } from "./merchant-signup1.styles";
import MerchantLeftDesign from "../merchant-left-design/merchant-left-design.component";
import HargonLogo from "../../assets/hargon-logo.svg";

const MerchantSignUp1 = () => {
  return (
    <MerchantSignup1Container>
      <div className="left-form">
        <MerchantLeftDesign />
      </div>

      <div className="right-form">
        <div className="form-section">
          <div className="hargon-icon">
            <img src={HargonLogo} alt="" />
          </div>

          <div className="form-header">Create a Merchant Account</div>

          <div className="form-input">
            <input className="f-input" placeholder="</KodeHex" type="text" />
            <div className="user">{"</Kode Hex>is the new username"}</div>
          </div>
          <div className="form-input">
            <input
              className="f-input"
              placeholder="Business Name"
              type="text"
            />
          </div>
          <div className="form-input">
            <input
              className="f-input"
              placeholder="Business Phone Number"
              type="text"
            />
          </div>
          <div className="form-input">
            <input
              className="f-input"
              placeholder="Business Industry"
              type="text"
            />
          </div>
          <div className="form-input">
            <input
              className="f-input"
              placeholder="Business Email"
              type="text"
            />
          </div>
          <div className="form-input">
            <input
              className="f-input"
              placeholder="Business website or social handle"
              type="text"
            />
          </div>
          <div className="form-input">
            <input className="f-input" placeholder="Password" type="password" />
          </div>

          <div className="signup-btn">Sign Up</div>
        </div>
      </div>
    </MerchantSignup1Container>
  );
};

export default MerchantSignUp1;

import React, { useState } from "react";
import { MerchantSignup1Container } from "./merchant-signup1.styles";
import MerchantLeftDesign from "../merchant-left-design/merchant-left-design.component";
import HargonLogo from "../../assets/hargon-logo.svg";
import SymbolCancel from "../../assets/symbol-cancel.svg";
import TickCircle from "../../assets/tick-circle.svg";
import CircleOutline from "../../assets/circle-outline.svg";

const MerchantSignUp1 = () => {
  const defaultField = {
    password: "",
  };

  const [credentials, setCredentials] = useState(defaultField);
  const [character, setCharacter] = useState(true);
  const [symbolNum, setSymbolNum] = useState(true);
  const [uppercase, setUppercase] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleClick = () => {
    const password = credentials.password.trim();
    if (password.length >= 8) {
      setCharacter(false);
    }

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (/\d/.test(password) || specialChars.test(password)) {
      setSymbolNum(false);
    }

    if (/[A-Z]/.test(password)) {
      setUppercase(false);
    }
  };

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
            <input
              className="f-input"
              placeholder="Password"
              name="password"
              type="password"
              onChange={(e) => handleChange(e)}
            />
            <div className="btm-auth">
              <div className={character ? "green" : "hide-text"}>
                <img src={TickCircle} alt="" />
                <div className="green-text">
                  Password must be 8 characters or longer
                </div>
              </div>

              <div className={symbolNum ? "gray" : "hide-text"}>
                <img src={CircleOutline} alt="" />
                <div className="gray-text">
                  Password must include one number or symbol
                </div>
              </div>

              <div className={uppercase ? "red" : "hide-text"}>
                <img src={SymbolCancel} alt="" />
                <div className="red-text">
                  Password must include at least one Uppercase
                </div>
              </div>
            </div>
          </div>

          <div className="signup-btn" onClick={() => handleClick()}>
            Sign Up
          </div>
        </div>
      </div>
    </MerchantSignup1Container>
  );
};

export default MerchantSignUp1;

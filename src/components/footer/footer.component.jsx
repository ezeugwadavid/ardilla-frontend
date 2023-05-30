import React, { useState } from "react";
import { FooterContainer } from "./footer.styles";
import HalfMobile from "../../assets/half-mobile.svg";
import Facebook from "../../assets/facebook-logo.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedln from "../../assets/linkedln-logo.svg";
import Twitter from "../../assets/twitter-logo.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="floating-rectangle">
        <div className="left-side">
          <div className="rect-text">Download for free Start saving Today</div>

          <div className="rect-btn">Download for free</div>
        </div>
        <div className="right-side">
          <img src={HalfMobile} alt="" />
        </div>
      </div>

      <div className="footer-details">
        <div className="footer-links">
          <div className="footer-prodt">
            <div className="prod-header">Products</div>
            <div className="prod-1">Savings</div>
            <div className="prod-2">Dilla</div>
            <div className="prod-3">Financial Coach</div>
            <div className="prod-4">Halal</div>
            <div className="prod-5">
              Budgetting <span className="soon">Coming soon</span>
            </div>
            <div className="prod-6">
              Investment <span className="soon">Coming soon</span>
            </div>
            <div className="prod-7">
              Insurance <span className="soon">Coming soon</span>
            </div>
          </div>

          <div className="footer-cmpy">
            <div className="cmpy-header">Company</div>
            <div className="cmpy-1">About us</div>
            <div className="cmpy-2">Careers</div>
            <div className="cmpy-3">FAQS</div>
            <div className="cmpy-4">Press</div>
          </div>

          <div className="footer-transp">
            <div className="transp-header">Transparency</div>
            <div className="transp-1">Terms & conditions</div>
            <div className="transp-2">Information security policy</div>
            <div className="transp-3">Privacy policy</div>
            <div className="transp-4">Interest Tool</div>
          </div>

          <div className="footer-dev">
            <div className="dev-header">Developer</div>
            <div className="dev-1">
              Connect API<span className="soon">Coming soon</span>
            </div>
          </div>

          <div className="footer-address">
            <div className="address-header">Address</div>
            <div className="address-1">33B, Ogundana street, Allen, Ikeja.</div>
            <div className="address-2">Contact</div>
            <div className="address-3">support@ardilla.africa</div>
            <div className="address-4">(234)801 000 1234</div>
          </div>
        </div>

        <div className="footer-hr"></div>

        <div className="bottom-contents">
          <div className="bottom-left">
            <div className="bottom-text1">
              © 2023 Ardilla. All right reserved
            </div>
            <div className="bottom-text2">
              Ardilla operates under the coorperative license of Ardilla
              Multipurpose Cooperative Society, LSC 18245, We provide Savings
              and Fixed deposit services to our users
            </div>
          </div>
          <div className="bottom-right">
            <img className="social-icon" src={Instagram} alt="" />
            <img className="social-icon" src={Facebook} alt="" />
            <img className="social-icon" src={Linkedln} alt="" />
            <img className="social-icon" src={Twitter} alt="" />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

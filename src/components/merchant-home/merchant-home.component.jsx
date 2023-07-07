import React from "react";
import { MerchantHomeContainer } from "./merchant-home.styles";
import MerchantLeftDesign from "../merchant-left-design/merchant-left-design.component";
import HargonLogo from "../../assets/hargon-logo.svg";
import Box1 from "../../assets/box1.svg";
import Box2 from "../../assets/box-2.svg";
import Box3 from "../../assets/box-3.svg";
import Box4 from "../../assets/box-4.svg";
import ArrowRightInBox from "../../assets/arrow-right.svg";
import { NavLink } from "react-router-dom";

const MerchantHome = () => {
  return (
    <MerchantHomeContainer>
      <div className="merchant-main">
        <div className="merchant-left">
          <MerchantLeftDesign />
        </div>
        <div className="merchant-right">
          <div className="select-content">
            <div className="h-logo">
            <img className="hargon-logo" src={HargonLogo} alt="" />
            </div>

            <div className="merchant-section">
              <div className="merchant-header-1">
                Select which type of account you want to open
              </div>
              <div className="merchant-header-2">
                Select which type of account you want to open
              </div>
              
              <NavLink className="to-merchant" to="/signup">
              <div className="merchant-box">
                <div className="merchant-box-content">
                  <div className="left-b-icon">
                    <img src={Box1} alt="" />
                  </div>
                  <div className="center-content">
                    <div className="first-top">Merchant</div>
                    <div className="second-top">
                      Select which type of account you want to open
                    </div>
                  </div>
                  <div className="right-b-arrow">
                    <img
                      className="right-arr-img"
                      src={ArrowRightInBox}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              </NavLink>

              <div className="merchant-box">
                <div className="merchant-box-content">
                  <div className="left-b-icon">
                    <img src={Box2} alt="" />
                  </div>
                  <div className="center-content">
                    <div className="first-top">Company</div>
                    <div className="second-top">
                      Select which type of account you want to open
                    </div>
                  </div>
                  <div className="right-b-arrow">
                    <img
                      className="right-arr-img"
                      src={ArrowRightInBox}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="merchant-box">
                <div className="merchant-box-content">
                  <div className="left-b-icon">
                    <img src={Box3} alt="" />
                  </div>
                  <div className="center-content">
                    <div className="first-top">Agents</div>
                    <div className="second-top">
                      Select which type of account you want to open
                    </div>
                  </div>
                  <div className="right-b-arrow">
                    <img
                      className="right-arr-img"
                      src={ArrowRightInBox}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="merchant-box">
                <div className="merchant-box-content">
                  <div className="left-b-icon">
                    <img src={Box4} alt="" />
                  </div>
                  <div className="center-content">
                    <div className="first-top">Partnership</div>
                    <div className="second-top">
                      Select which type of account you want to open
                    </div>
                  </div>
                  <div className="soon-btn">
                   Coming Soon
                  </div>
                </div>
              </div>


              <div className="btm-text">
                <div className="b-text-left">Already have an account?</div>
                <div className="b-text-right">Sign In</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </MerchantHomeContainer>
  );
};

export default MerchantHome;

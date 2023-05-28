import React, { useState } from "react";
import { TopMenuContainer } from "./top-menu.styles";
import MenuIcon from "../../assets/ardilla-logo.svg";
import ArrDown from "../../assets/arr-down.svg";
import Ellipse from "../../assets/ellipse.svg";
import ArrowDownIcon from "../../assets/arrow-down.svg";

const TopMenu = () => {
  const [highlightItem1, setHighlightItem1] = useState(false);
  const [highlightItem2, setHighlightItem2] = useState(false);
  const [highlightItem3, setHighlightItem3] = useState(false);
  const [highlightItem4, setHighlightItem4] = useState(false);

  const setHighlight1 = () => {
    setHighlightItem1(!highlightItem1);
    setHighlightItem2(false);
    setHighlightItem3(false);
    setHighlightItem4(false);
  };
  const setHighlight2 = () => {
    setHighlightItem1(false);
    setHighlightItem2(!highlightItem1);
    setHighlightItem3(false);
    setHighlightItem4(false);
  };
  const setHighlight3 = () => {
    setHighlightItem1(false);
    setHighlightItem2(false);
    setHighlightItem3(!highlightItem1);
    setHighlightItem4(false);
  };
  const setHighlight4 = () => {
    setHighlightItem1(false);
    setHighlightItem2(false);
    setHighlightItem3(false);
    setHighlightItem4(!highlightItem1);
  };

  return (
    <TopMenuContainer>
      <div className="logo">
        <img src={MenuIcon} alt="" />
      </div>
      <div className="center-menu">
        <div
          className={highlightItem1 ? "highlight-item" : "product"}
          onClick={() => setHighlight1()}
        >
          <div className="product-text">Products</div>
          <div className="arr-down">
            <img src={ArrDown} alt="" />
          </div>
        </div>
        <div
          className={highlightItem2 ? "highlight-item" : "business"}
          onClick={() => setHighlight2()}
        >
          <div className="business-text">Business</div>
          <div className="beta">Beta</div>
        </div>
        <div
          className={highlightItem3 ? "highlight-item" : "company"}
          onClick={() => setHighlight3()}
        >
          <div className="company-text">Company</div>
          <div className="arr-down">
            <img src={ArrDown} alt="" />
          </div>
        </div>
        <div
          className={highlightItem4 ? "highlight-item" : "learn"}
          onClick={() => setHighlight4()}
        >
          Learn
        </div>
      </div>
      <div className="right-menu">
        <div className="sign-in">Sign In</div>
        <div className="create">Create Account</div>
        <div className="right-icons">
          <img src={Ellipse} alt="" />
          <img src={ArrowDownIcon} alt="" />
        </div>
      </div>
    </TopMenuContainer>
  );
};

export default TopMenu;

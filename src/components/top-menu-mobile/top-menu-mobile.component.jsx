import React, { useState } from "react";
import { TopMenuMobileContainer } from "./top-menu-mobile.styles";
import MenuRightIcon from "../../assets/menu-left-icon.svg";
import ArdillaIcon from "../../assets/ardilla-logo.svg";
import ArrDownIcon from "../../assets/arr-down.svg";

const TopMenuMobile = () => {
  const [highlight1, setHighlight1] = useState(true);
  const [highlight2, setHighlight2] = useState(false);
  const [highlight3, setHighlight3] = useState(false);
  const [highlight4, setHighlight4] = useState(false);
  const [highlight5, setHighlight5] = useState(false);
  const [highlight6, setHighlight6] = useState(false);

  const [toggleShow, setToggleShow] = useState(false);

  const toggleNav = () => {
    setToggleShow(!toggleShow);
  };

  const setHighlighted1 = () => {
    setHighlight1(!highlight1);
    setHighlight2(false);
    setHighlight3(false);
    setHighlight4(false);
    setHighlight5(false);
    setHighlight6(false);
  };
  const setHighlighted2 = () => {
    setHighlight1(false);
    setHighlight2(!highlight2);
    setHighlight3(false);
    setHighlight4(false);
    setHighlight5(false);
    setHighlight6(false);
  };
  const setHighlighted3 = () => {
    setHighlight1(false);
    setHighlight2(false);
    setHighlight3(!highlight3);
    setHighlight4(false);
    setHighlight5(false);
    setHighlight6(false);
  };
  const setHighlighted4 = () => {
    setHighlight1(false);
    setHighlight2(false);
    setHighlight3(false);
    setHighlight4(!highlight4);
    setHighlight5(false);
    setHighlight6(false);
  };
  const setHighlighted5 = () => {
    setHighlight1(false);
    setHighlight2(false);
    setHighlight3(false);
    setHighlight4(false);
    setHighlight5(!highlight5);
    setHighlight6(false);
  };
  const setHighlighted6 = () => {
    setHighlight1(false);
    setHighlight2(false);
    setHighlight3(false);
    setHighlight4(false);
    setHighlight5(false);
    setHighlight6(!highlight6);
  };

  return (
    <TopMenuMobileContainer>
      <div className={toggleShow ? "hide-menu" : "top-nav"}>
        <img className="left-ard-logo" src={ArdillaIcon} alt="" />
        <img
          onClick={() => toggleNav()}
          className="right-menu-icon"
          src={MenuRightIcon}
          alt=""
        />
      </div>

      <div className={toggleShow ? "nav-menu" : "hide-nav"}>
        <div className="close-btn" onClick={() => toggleNav()}>
          x
        </div>

        <div className="menu-list">
          <div
            className={
              highlight1 ? "list-highlighted list list1" : "list list1"
            }
            onClick={() => setHighlighted1()}
          >
            <div className="prod-name">Products</div>
            <img className="icn" src={ArrDownIcon} alt="" />
          </div>

          <div
            className={
              highlight2 ? "list-highlighted list list2" : "list list2"
            }
            onClick={() => setHighlighted2()}
          >
            <div className="business-name">Business</div>
            <div className="business-beta">Beta</div>
          </div>

          <div
            className={
              highlight3 ? "list-highlighted list list3" : "list list3"
            }
            onClick={() => setHighlighted3()}
          >
            <div className="cmpy-name">Company</div>
            <img className="icn" src={ArrDownIcon} alt="" />
          </div>

          <div
            className={highlight4 ? "list-highlighted list" : "list"}
            onClick={() => setHighlighted4()}
          >
            Learn
          </div>
          <div className="hr"></div>
          <div
            className={
              highlight5 ? "list-highlighted list list5" : "list list5"
            }
            onClick={() => setHighlighted5()}
          >
            Sign In
          </div>
          <div
            className={
              highlight6 ? "list-highlighted list list6" : "list list6"
            }
            onClick={() => setHighlighted6()}
          >
            Create Account
          </div>
        </div>
      </div>
    </TopMenuMobileContainer>
  );
};

export default TopMenuMobile;

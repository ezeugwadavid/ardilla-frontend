import React, { useState } from "react";
import { SignUpHeroContainer } from "./sign-up-hero.styles";
import MenuRightIcon from "../../assets/menu-left-icon.svg";
import ArdillaIcon from "../../assets/ardilla-logo.svg";
import RightMobile from "../../assets/right-mobile.svg";
import LineBended from "../../assets/line-bended.svg";
import Plane from "../../assets/plane.svg";
import ArrowBack from "../../assets/arrow-back.svg";
import FbGreen from "../../assets/fb-green.svg";
import IgGreen from "../../assets/ig-green.svg";
import HurrayIcon from "../../assets/hurray.svg";
import MarkIcon from "../../assets/mark-icon.svg";
import TwitterGreen from "../../assets/twitter-green.svg";
import { NavLink } from "react-router-dom";

const SignUpHero = () => {
  const [modal, setModal] = useState(false);
  const [errModal, setErrModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleErrModal = () => {
    setErrModal(!errModal);
  };

  const defaultField = {
    email: "",
  };

  const [credentials, setCredentials] = useState(defaultField);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleClick = () => {
    console.log(credentials.email);
    if (credentials.email === " ") {
      setErrModal(true);
      return;
    }

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!credentials.email.match(validRegex)) {
      setErrModal(true);
      return;
    }
    toggleModal();
  };

  return (
    <SignUpHeroContainer>
      {/* modal */}
      <div className={modal ? "show-modal" : "modal"}>
        <div class="modal-content">
          <NavLink className="n-link" to="/">
            <div className="top-modal">
              <img src={ArrowBack} alt="" />
              <div className="modal-exit">Go back</div>
            </div>
          </NavLink>

          <div className="center-icon">
            <img src={MarkIcon} alt="" />
          </div>

          <div className="response">
            <img className="hurray" src={HurrayIcon} alt="" />
            <div className="response-text">Great!! You’re on the waitlist</div>
          </div>

          <div className="modal-text">
            An email would be sent to {credentials.email} in regards, Thank You
          </div>

          <div className="bottom-icons">
            <img className="green" src={FbGreen} alt="" />
            <img className="green" src={IgGreen} alt="" />
            <img className="green" src={TwitterGreen} alt="" />
          </div>
        </div>
      </div>

      <div className={errModal ? "show-modal" : "modal"}>
        <div class="modal-content">
          <div className="top-modal" onClick={() => toggleErrModal()}>
            <img src={ArrowBack} alt="" />
            <div className="modal-exit">Go back</div>
          </div>
          <div className="modal-text">Please enter a valid email address</div>
          <div className="bottom-icons">
            <img className="green" src={FbGreen} alt="" />
            <img className="green" src={IgGreen} alt="" />
            <img className="green" src={TwitterGreen} alt="" />
          </div>
        </div>
      </div>

      {/* page content */}
      <div className="top">
        <img className="left-sign" src={ArdillaIcon} alt="" />
        <div className="right-sign">
          <span className="dot">.</span> Features
        </div>
        <div className="right-sign-icon">
          <img src={MenuRightIcon} alt="" />
        </div>
      </div>
      <div className="page-content">
        <div className="left-hero">
          <div className="bold">Your portal to more</div>
          <img src={LineBended} alt="" />
          <div className="hero-content">
            Wealth building is possible. You just need the right partner. With
            better financial tools, Ardilla has made it so much easier for you
            to start building wealth. Take advantage of the Ardilla platform by
            signing up with your email address.
          </div>

          <div className="input">
            <input
              className="input-field"
              placeholder="someone@example.com"
              type="text"
              name="email"
              value={credentials.email}
              onChange={(e) => handleChange(e)}
            />
            <div className="input-btn" onClick={() => handleClick()}>
              <div className="input-text">Access More</div>
              <img className="plane" src={Plane} alt="" />
            </div>
          </div>
        </div>
      </div>
      <img className="right-mobile" src={RightMobile} alt="" />
    </SignUpHeroContainer>
  );
};

export default SignUpHero;

import React from "react";
import { ButtonIconContainer } from "./button-icon.styles";
import FlyIcon from "../../assets/fly-icon.svg";
import FlyIconWhite from "../../assets/fly-icon-white.svg";
import PropTypes from "prop-types";

const ButtonIcon = ({ children, handleClick, ...otherProps }) => {
  const { iconType } = otherProps;
  return (
    <ButtonIconContainer {...otherProps} onClick={handleClick}>
      <div className="text">{children}</div>
      {iconType === "white" ? (
        <img src={FlyIconWhite} alt="" />
      ) : (
        <img src={FlyIcon} alt="" />
      )}
    </ButtonIconContainer>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func,
};

export default ButtonIcon;

import React, { useState } from "react";
import { ButtonContainer } from "./button.styles";
import MenuIcon from "../../assets/ardilla-logo.svg";
import PropTypes from 'prop-types';


const Button = ({ children, handleClick, ...otherProps }) => {

  return (
    <ButtonContainer {...otherProps} onClick={handleClick}>
     {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
	children: PropTypes.any,
	handleClick: PropTypes.func
};

export default Button;

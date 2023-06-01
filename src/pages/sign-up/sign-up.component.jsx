import React from "react";
import { SignUpContainer } from "./sign-up.styles";
import SignUpHero from "../../components/sign-up-hero/sign-up-hero.component";
import SignUpFooter from "../../components/sign-up-footer/sign-up-footer.component";

const SignUp = () => {
  
  return (
    <SignUpContainer>
        <SignUpHero />
        <SignUpFooter /> 
    </SignUpContainer>
  );
};

export default SignUp;

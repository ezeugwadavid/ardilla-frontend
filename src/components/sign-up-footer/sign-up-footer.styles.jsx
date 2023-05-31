import styled from "styled-components";
import CuvredBackground from "../../assets/curved-background.svg";

export const SignUpFooterContainer = styled.div`
  background: #ffffff;
  border-radius: 30px 20px 0px 0px;
  font-family: "Clash Display", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  bottom: 25px;

  .footer-container {
    margin: 0px auto;
    width: 1220px;
    padding: 2%;
  }

  .ellipse-background {
    margin-top: 10%;
    margin-left: 3.5%;
    background-image: url(${CuvredBackground});
    width: 330px;
    height: 50px;
    padding-top: 28px;
    padding-left: 10px;
    padding-right: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 28px;
    color: #ffffff;
  }

  .right-arr {
    float: right;
  }

  .footer-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 3%;
    cursor: pointer;
  }

  .cards {
    width: 300.35px;
    height: 195.95px;
  }
  .access {
    margin-top: 28px;
  }

  .sign-up-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 10%;
    padding: 2%;
  }

  .left-details {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #8807f7;
  }

  .social-ic {
    margin-right: 10px;
  }

  .progress-status {
    width: 98%;
  }

  @media screen and (max-width: 1220px) {
    .footer-container {
      margin: 0px auto;
      width: 98%;
      padding: 0%;
    }

    .cards {
      width: 110.35px;
      height: 150.95px;
    }
  }
`;

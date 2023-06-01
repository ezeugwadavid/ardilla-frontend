import styled from "styled-components";
import Background from "../../assets/BACKGROUND.svg";

export const FooterContainer = styled.div`
  background: #8807f7;

  .floating-rectangle {
    display: flex;
    justify-content: center;
    margin: 0px auto;
    height: 130.37px;
    width: 60%;
    position: relative;
    bottom: 170px;
    background-image: url(${Background});
    border-radius: 16.2102px;
    padding: 10%;
  }

  .rect-text {
    font-style: normal;
    font-weight: 700;
    font-size: 36.4729px;
    line-height: 45px;
    color: #ffffff;
    width: 95%;
    text-align: left;
  }

  .rect-btn {
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 142px;
    height: 57px;
    margin-top: 24.52px;
    cursor: pointer;
  }

  .rect-btn:hover {
    color: #ffffff;
    background: #240053;
  }

  .footer-details {
    padding: 5%;
  }

  .footer-links {
    display: flex;
    justify-content: space-between;
  }

  .footer-prodt {
    text-align: left;
  }

  .prod-header {
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .prod-1,
  .prod-2,
  .prod-3,
  .prod-4,
  .prod-5,
  .prod-6,
  .prod-7 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
  }

  .soon {
    box-sizing: border-box;
    font-style: normal;
    font-weight: 500;
    font-size: 7.2141px;
    line-height: 16px;
    padding: 2px 4.34509px;
    gap: 4.35px;
    border: 0.68922px solid #ffffff;
    border-radius: 62.0299px;
    color: #ffffff;
    width: 45px;
    height: 16px;
    margin-left: 10px;
  }

  .footer-cmpy {
    text-align: left;
  }

  .cmpy-header {
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .cmpy-1,
  .cmpy-2,
  .cmpy-3,
  .cmpy-4 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
  }

  .footer-transp {
    text-align: left;
  }

  .transp-header {
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .transp-1,
  .transp-2,
  .transp-3,
  .transp-4 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
  }

  .footer-dev {
    text-align: left;
  }

  .dev-header {
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .dev-1 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
  }

  .footer-address {
    text-align: left;
  }

  .address-header {
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .address-1,
  .address-3,
  .address-4 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
  }

  .address-2 {
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  .footer-hr {
    height: 0px;
    border: 1px solid #d1d5db;
    margin-top: 36px;
    margin-bottom: 23px;
  }

  .bottom-contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .bottom-text1 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .bottom-text2 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 32px;
    color: #ffffff;
  }

  .bottom-right {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .social-icon {
    margin-right: 15px;
  }

  @media screen and (max-width: 800px) {
    padding: 10% 2%;
    .floating-rectangle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto;
    height: 100%;
    width: 80%;
    position: relative;
    bottom: 170px;
    background-image: url(${Background});
    border-radius: 16.2102px;
    padding-top: 10%;
    padding-right: 10%;
    padding-left: 10%;
    padding-bottom: 0%;
  }

  .rect-text {
    font-style: normal;
    font-weight: 700;
    font-size: 36.4729px;
    line-height: 45px;
    color: #ffffff;
    width: 95%;
    text-align: center;
  }

  .rect-btn {
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 57px;
    margin: 24.52px auto;
    cursor: pointer;
  }

  .half-mobile{
    width: 90%;
    height: 90%;
    margin-top: 30px;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bottom-contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .bottom-right {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: 30px 0px;
  }

  .cmpy-header {
    margin-bottom: 16px;
    margin-top: 20px;
  }

  .transp-header {
    margin-bottom: 16px;
    margin-top: 20px;
  }

  .dev-header {
    margin-bottom: 16px;
    margin-top: 20px;
  }
  .address-header {
    margin-bottom: 16px;
    margin-top: 20px;
  }

  }

  @media screen and (min-width: 801px) and (max-width: 1109px) {

    .floating-rectangle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto;
    height: 100%;
    width: 80%;
    position: relative;
    bottom: 170px;
    background-image: url(${Background});
    border-radius: 16.2102px;
    padding-top: 10%;
    padding-right: 10%;
    padding-left: 10%;
    padding-bottom: 0%;
  }

  .rect-text {
    font-style: normal;
    font-weight: 700;
    font-size: 36.4729px;
    line-height: 45px;
    color: #ffffff;
    width: 95%;
    text-align: center;
  }

  .rect-btn {
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 57px;
    margin: 24.52px auto;
    cursor: pointer;
  }

  .half-mobile{
    width: 90%;
    height: 90%;
    margin-top: 30px;
  }

    
  }


`;

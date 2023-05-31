import styled from "styled-components";
import BackDepth from "../../assets/background-depth.svg";
import Back from "../../assets/back.svg";

export const SignUpHeroContainer = styled.div`
  font-family: "Clash Display", sans-serif;
  background: #8807f7;
 
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    background-image: url(${BackDepth});
    //height: 60px;
  }

  .right-sign {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 125.9%;
    color: #ffffff;
    margin-top: 20px;
    margin-right: 10%;
  }
  .left-sign {
    margin-top: 20px;
    margin-left: 10%;
  }

  .dot {
  }

  .page-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${BackDepth});
  }

  .bold {
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 110.5%;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    width: 50%;
  }

  .hero-content {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 181.5%;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    width: 45%;
    margin-top: 54px;
    margin-bottom: 74px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
  }

  .right-mobile {
    width: 250px;
    height: 500px;
    position: absolute;
    left: 85%;
    top: 400px;
  }

  .input {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    margin-left: 14%;
  }

  .input-field {
    height: 68px;
    background: #ffffff;
    border-radius: 100px;
    width: 45%;
    font-size: 18px;
    border: 1px solid #ffffff;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 5px;
    padding-left: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    color: #9CA3AF;
  }

  input[type="text"]:focus {
    border: 1px solid #ffffff;
  }

  .input-btn {
    width: 176px;
    padding: 10px;
    height: 52px;
    background: #8807f7;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #ffffff;
    position: relative;
    right: 200px;
    top: 3px;
  }
  .plane {
    width: 14.95px;
    height: 14.95px;
    margin-left: 10px;
  }

  .plane:hover {
    transform: rotate(-90deg);
  }

  @media screen and (max-width: 800px) {
  }

  @media screen and (min-width: 1900px)  {
    .right-mobile {
    width: 250px;
    height: 500px;
    position: absolute;
    left: 95%;
    top: 400px;
  }
  };
`;

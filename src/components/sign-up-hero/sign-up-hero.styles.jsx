import styled from "styled-components";
import BackDepth from "../../assets/background-depth.svg";

export const SignUpHeroContainer = styled.div`
  background: #8807f7;

  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* 4Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  .show-modal {
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 3; /* Sit on top */
    left: 0%;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
  }

  /* Modal Content/Box */
  .modal-content {
    background: #ffffff;
    padding: 5%;
    width: 90%; /* Could be more or less, depending on screen size */
    margin: auto auto;
  }

  .top-modal {
    display: flex;
    cursor: pointer;
  }

  .modal-exit {
    margin-left: 10px;
  }

  .center-icon {
    display: flex;
    justify-content: center;
    margin-left: 5%;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .response {
    display: flex;
    justify-content: center;
  }
  .response-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 31px;
    margin-left: 0px;
    color: #22c55e;
    text-align: center;
  }

  .hurray {
    margin-bottom: 20px;
  }

  .modal-text {
    display: flex;
    justify-content: center;
    margin: 5% auto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #9ca3af;
    width: 30%;
  }

  .bottom-icons {
    display: flex;
    justify-content: center;
  }

  .green {
    margin-right: 15px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    background-image: url(${BackDepth});
  }

  .n-link {
    text-decoration: none;
  }

  .dot {
    position: relative;
    bottom: 3px;
    right: 2px;
  }

  .right-sign {
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 125.9%;
    color: #ffffff;
    margin-top: 20px;
    margin-right: 10%;
  }

  .right-sign-icon {
    display: none;
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
    right: -0%;
    top: 400px;
    z-index: 1;
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
    color: #9ca3af;
  }

  input[type="text"]:focus {
    border: 1px solid #ffffff;
  }

  input::placeholder {
    color: #9ca3af;
    font-size: 14px;
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
    .right-sign {
      display: none;
    }

    .input-field {
      width: 100%;
      height: 40px;
      font-size: 10px;
    }

    .input-text {
      font-size: 12px;
    }

    input::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #9ca3af;
    }

    .input-btn {
      width: 50%;
      padding: 10px;
      height: 20px;
      background: #8807f7;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: #ffffff;
      position: relative;
      right: 37%;
      top: 0px;
    }

    .hero-content {
      margin-bottom: 20px;
    }

    .right-sign-icon {
      display: block;
      margin-top: 20px;
      margin-right: 5%;
    }
    .input {
      display: flex;
      justify-content: center;
      margin-left: 15%;
      align-items: center;
      position: relative;
      left: 1%;
      margin-bottom: 100px;
    }

    .right-mobile {
      width: 140px;
      height: 300px;
      position: absolute;
      right: -0%;
      top: 750px;
      z-index: 1;
    }
  }

  @media screen and (max-width: 430px) {
    .bold {
      font-size: 70px;
    }

    .modal-text {
      width: 90%;
    }

    .hero-content {
      margin-bottom: 20px;
      width: 90%;
    }

    .right-mobile {
      width: 67px;
      height: 150px;
      position: absolute;
      right: -0%;
      top: 700px;
      z-index: 1;
    }

    .input-field {
      font-size: 8px;
      height: 30px;
    }

    input::placeholder {
      font-size: 8px;
    }

    .input-btn {
      width: 30%;
      height: 10px;
      position: relative;
      right: 29%;
    }

    .input-text {
      font-size: 8px;
    }
  }

  @media screen and (max-width: 610px) {
    input::placeholder {
      font-size: 8px;
    }
  }

  @media screen and (max-width: 300px) {
    input::placeholder {
      font-size: 7px;
    }

    .input-btn {
      width: 30%;
      height: 10px;
      position: relative;
      right: 32%;
    }

    .input-field {
      font-size: 7px;
      padding: 7px;
    }
  }
`;

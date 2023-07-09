import styled from "styled-components";

export const MerchantSignup1Container = styled.div`
  display: flex;

  .left-form {
    width: 35%;
    position: fixed;
    display: flex;
    justify-content: start;
  }

  .right-form {
    width: 65%;
    position: relative;
    left: 30%;
  }

  .hargon-icon {
    display: flex;
    justify-content: end;
  }

  .form-section {
    padding: 5%;
  }

  .form-header {
    font-size: 15px;
    font-weight: bold;
    width: 30%;
    margin-top: 30px;
    text-align: left;
  }

  .form-input {
    margin-top: 20px;
  }

  .f-input {
    padding: 20px;
    width: 95%;
    text-align: left;
    border: 1px solid #f3f3f3;
    outline: none;
    font-family: "Syne", sans-serif;
  }

  .eye {
    position: absolute;
    width: 95%;
  }

  .input-icon-eye {
    position: relative;
    left: 41%;
    bottom: 34px;
  }

  .arrow-down {
    position: absolute;
    width: 95%;
  }

  .input-icon-down {
    position: relative;
    left: 41%;
    bottom: 34px;
  }

  .user {
    font-size: 10px;
    display: flex;
    justify-content: end;
    margin-top: 5px;
    color: #9ca3af;
  }

  .signup-btn {
    display: flex;
    justify-content: center;
    padding: 20px;
    background: #23a323;
    color: #ffffff;
    font-size: 15px;
    border-radius: 50px;
    margin-top: 50px;
    cursor: pointer;
    font-family: "Mona-Sans", sans-serif;
  }

  .btm-auth {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    margin-top: 10px;
  }

  .green,
  .gray,
  .red {
    display: flex;
  }

  .green-text {
    color: #228b22;
    margin-left: 10px;
  }

  .gray-text {
    color: #6b7280;
    margin-left: 10px;
  }

  .red-text {
    color: #ff0606;
    margin-left: 10px;
  }

  .hide-text {
    visibility: hidden;
    display: flex;
  }

  .merchant-btm {
    margin-top: 20px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    font-family: "Mona-Sans", sans-serif;
    font-weight: 800px;
  }

  .btm-green {
    margin-left: 5px;
    color: #23a323;
  }

  @media screen and (max-width: 800px) {
    .right-form {
      width: 100%;
      position: relative;
      left: 2%;
    }

    .form-section {
      padding: 3%;
    }

    .form-header {
      font-size: 15px;
      font-weight: bold;
      width: 80%;
      margin-top: 30px;
      text-align: left;
    }

    .f-input {
      padding: 20px;
      width: 88%;
      text-align: left;
      border: 1px solid #f3f3f3;
      outline: none;
    }

    .btm-auth {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 10px;
      margin-top: 10px;
    }

    .green,
    .gray,
    .red {
      margin-top: 5px;
    }
  }
`;

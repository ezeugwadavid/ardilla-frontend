import styled from "styled-components";

export const MerchantSignup1Container = styled.div`
  display: flex;

  .left-form {
    width: 30%;
    position: fixed;
  }

  .right-form {
    width: 70%;
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
  }

  .user{
    font-size: 10px;
    display: flex;
    justify-content: end;
    margin-top: 5px;
    color: #9CA3AF;
  }

  .signup-btn{
    display: flex;
    justify-content: center;
    padding: 20px;
    background: #23A323;
    color: #ffffff;
    font-size: 15px;
    border-radius: 50px;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    .right-form {
    width: 100%;
    position: relative;
    left: 10%;
  }

  
  .form-section {
    padding: 0%;
  }

  .form-header {
    font-size: 15px;
    font-weight: bold;
    width: 50%;
    margin-top: 30px;
    text-align: left;
  }
  }
`;

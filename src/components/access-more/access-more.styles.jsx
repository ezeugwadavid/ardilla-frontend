import styled from "styled-components";

export const AccessMoreContainer = styled.div`
  height: 1502px;
  background: #1b0132;
  display: flex;
  justify-content: center;
  align-items: center;

  .access-container {
    width: 1150px;
  }

  .access-header {
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    line-height: 100px;
    color: #ffffff;
    text-align: left;
  }

  .access-phrase {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #ffffff;
    text-align: left;
    width: 75%;
  }

  .access-btn {
    margin-top: 31px;
    width: 25%;
  }

  .box {
    display: grid;
    grid-template-columns: 29% 29%;
    column-gap: 3%;
    box-sizing: border-box;
    background: #29014b;
    box-shadow: 0px 10px 35px rgba(6, 46, 253, 0.25),
      0px 15px 70px rgba(251, 64, 64, 0.25),
      0px 30px 90px rgba(136, 7, 247, 0.5);
    border-radius: 4px;
    margin-top: 70.75px;
    padding: 5%;
    justify-content: space-evenly;
  }

  .inner-box {
    padding: 5%;
    margin-top: 112.67px;
  }

  .inner-box:hover {
    background: #43027e;
    border-radius: 24px;
  }

  .dib-icon {
    margin-bottom: 49.33px;
    display: flex;
    justify-content: start;
  }

  .box-topic {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 122.4%;
    color: #fefce8;
    text-align: left;
  }

  .box-text {
    margin-top: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
    text-align: left;
  }

  .bottom-link {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
    margin-top: 30px;
    text-align: left;
  }

  @media screen and (max-width: 800px) {
    height: 100%;
    padding: 30% 2%;

    .access-container {
      width: 100%;
    }

    .access-header {

      font-style: normal;
      font-weight: 800;
      font-size: 50px;
      line-height: 70px;
      color: #ffffff;
      text-align: left;
    }

    .access-phrase {
      width: 80%;
    }

    .access-btn {
      margin-top: 31px;
      width: 50%;
    }

    .box {
      display: grid;
      grid-template-columns: 90%;
    }

    .inner-box {
      padding: 8%;
      margin-top: 112.67px;
    }
  }

  @media screen and (max-width: 330px) {
    .access-header {
      font-size: 40px;
    }
    .access-btn {
      margin-top: 31px;
      width: 70%;
    }
  }

  @media screen and (min-width: 801px) and (max-width: 1109px) {
    height: 100%;
    padding: 30% 2%;

    .access-container {
      width: 100%;
    }

    .access-phrase {
      width: 90%;
    }

    .access-btn {
      margin-top: 31px;
      width: 40%;
    }
  }

`;

import styled from "styled-components";

export const PartnersContainer = styled.div`
  height: 812px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8fafc;

  .partner-content {
    width: 1000px;
  }

  .partners {
    display: flex;
    justify-content: center;
    margin-bottom: 81.59px;
  }

  .part-logo {
    margin-right: 25px;
  }

  .vr {
    width: 44.71px;
    height: 0px;
    border: 0.757757px solid #6b7280;
    transform: rotate(90deg);
    margin: auto 25px;
  }

  .screen-shot-box {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 10%;
    background: #f3f4f6;
    border-radius: 20px;
    height: 407px;
    margin: 0px auto;
    box-shadow: 10px 10px 10px 10px #eef0f2;
  }

  .screen-shot-desc {
    font-style: normal;
    font-weight: 800;
    font-size: 35px;
    line-height: 43px;
    color: #3d0072;
    text-align: center;
  }

  .screen-text {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #3d0072;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 23px;
  }

  .web-shot {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  @media screen and (max-width: 800px) {
    height: 100%;
    padding: 30% 2%;

    .partner-content {
      width: 98%;
    }

    .partners {
      display: flex;
      justify-content: center;
      margin-bottom: 81.59px;
    }

    .part-logo {
      margin-right: 10px;
      width: 70px;
      height: 70px;
    }

    .vr {
      margin: auto 10px;
      height: 30px;
      width: 0px;
      transform: rotate(0deg);
    }

    .screen-shot-box {
      padding-left: 8%;
      padding-right: 8%;
      padding-top: 8%;
      background: #f3f4f6;
      border-radius: 20px;
      height: 100%;
      width: 75%;
      margin: 0px auto;
      box-shadow: 10px 10px 10px 10px #eef0f2;
    }
  }

  @media screen and (max-width: 330px) {
    .part-logo {
      width: 50px;
      height: 50px;
    }
  };

  @media screen and (min-width: 801px) and (max-width: 1109px)  {
    .screen-shot-box {
      width: 75%;
    }
  }


`;

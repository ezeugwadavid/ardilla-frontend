import styled from "styled-components";

export const ProductsContainer = styled.div`
  background: #fffdf2;
  border-radius: 32px 32px 0px 0px;
  height: 940px;
  position: relative;
  bottom: 30px;

  .headline {
    display: flex;
    justify-content: start;
    max-width: 1200px;
    margin: 0px auto;
  }

  .header {
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    line-height: 110px;
    color: #3d0072;
    text-align: left;
    padding-top: 120px;
  }
  .product-content-container {
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .left {
    margin-right: 5%;
  }

  .product-type {
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #e8356d;
    text-align: left;
    margin-top: 40px;
  }

  .product-phrase {
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    color: #3d0072;
    text-align: left;
  }

  .product-text {
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 30px;
    color: #9ca3af;
    margin-bottom: 63px;
  }

  .product-points {
    display: flex;
    margin-top: 33.75px;
  }

  .points-text {
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #3d0072;
    margin-left: 5%;
  }

  .progress {
    width: 95%;
    display: flex;
    justify-content: center;
    margin: 79px 0px;
  }

  .progress-bar{
    width: 95%;
    height: 30px;
    display: flex;
    justify-content: center;
    margin: 79px 0px;
    color: '#F3F4F6';
    background-color: "#8807F7";
    height: 8px;
    border-radius: 16px;
    transition: 0.3s;
  }

  .progress-bottom {
    display: flex;
    justify-content: start;
    max-width: 1200px;
    margin: 0px auto;
  }

  @media screen and (max-width: 800px) {
    height: 100%;
    position: relative;
    bottom: 25px;
    padding: 20% 3%;

    .product-content-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .left {
      margin-right: 0%;
    }

    .small-mobile {
      margin-top: 30px;
      margin-right: 20px;
      width: 300px;
      height: 300px;
      display: flex;
      justify-content: start;
    }

    .progress {
      width: 92%;
      display: flex;
      justify-content: center;
      margin: 30px 0px;
    }

    .product-text {
      font-family: "Cabinet Grotesk", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 30px;
      color: #9ca3af;
      margin-bottom: 63px;
      text-align: left;
    }
  }

  @media screen and (max-width: 330px) {
    .header {
    font-size: 50px;
  }

  .small-mobile {
      margin-top: 30px;
      margin-right: 20px;
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: start;
    }
  };

  @media screen and (min-width: 450px) and (max-width: 800px)  {
    .small-mobile {
      width: 97%;
      height: 90%;
    }
  };

  @media screen and (min-width: 801px) and (max-width: 1109px)  {
    .product-text {
      font-size: 15px;
      line-height: 30px;
      margin-bottom: 63px;
      text-align: left;
      width: 95%;
    }
  }




`;

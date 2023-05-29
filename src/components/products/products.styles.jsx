import styled from "styled-components";

export const ProductsContainer = styled.div`
  background: #fffdf2;
  border-radius: 32px 32px 0px 0px;
  height: 940px;
  position: relative;
  bottom: 30px;

  .headline{
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

  .left{
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

  .progress-bottom{
    display: flex;
    justify-content: start;
    max-width: 1200px;
    margin: 0px auto;
  }

  @media screen and (max-width: 800px) {
  }
`;

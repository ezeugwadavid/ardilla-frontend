import styled from "styled-components";

export const TopMenuContainer = styled.div`
  height: 100px;
  background: #240053;
  box-shadow: 0px 4px 10px rgba(136, 7, 247, 0.07);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .center-menu {
    font-family: "Cabinet Grotesk", sans-serif;
    display: flex;
    color: #ffffff;
    cursor: pointer;
  }

  .product {
    display: flex;
    margin-right: 20%;
  }

  .product-text {
    margin-right: 10%;
  }

  .business {
    display: flex;
    margin-right: 20%;
  }
  .business-text {
    margin-right: 10%;
  }
  .company {
    display: flex;
    margin-right: 20%;
  }
  .company-text {
    display: flex;
    margin-right: 10%;
  }

  .highlight-item {
    display: flex;
    margin-right: 20%;
    color: #8807f7;
  }

  .right-menu {
    font-family: "Cabinet Grotesk", sans-serif;
    display: flex;
    align-items: center;
    color: #ffffff;
    cursor: pointer;
  }

  .sign-in {
    margin-right: 15px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
  }

  .create {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8.71407px;
    gap: 8.71px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    width: 175.6px;
    height: 47.89px;
    background: #8807f7;
    border-radius: 79.8182px;
    margin-right: 20px;
  }

  .right-icons {
    display: flex;
  }

  @media screen and (max-width: 800px) {
  }
`;

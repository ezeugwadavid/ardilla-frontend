import styled from "styled-components";

export const TopMenuContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
  height: 100px;
  background: #240053;
  box-shadow: 0px 4px 10px rgba(136, 7, 247, 0.07);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .center-menu {
    font-family: "Cabinet Grotesk", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
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

  .beta{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 3.08696px;
gap: 6.09px;
border: 1px solid #FFFFFF;
border-radius: 3px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
width: 32.87px;
height: 14px;
  }

  .highlight-item {
    display: flex;
    margin-right: 20%;
    color: #8807f7;
  }

  .highlight-learn {
    color: #8807f7;
  }
  .highlight-item-beta {
    border: 1px solid #8807f7;
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
  
  .right-icons {
    display: flex;
  }

  @media screen and (max-width: 800px) {
  }
`;

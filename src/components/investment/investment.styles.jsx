import styled from "styled-components";

export const InvestmentContainer = styled.div`
  height: 702px;
  background: #fffdf2;
  display: flex;
  justify-content: center;
  align-items: center;

  .interest-content {
    width: 1150px;
  }

  .interest-heading {
    height: 200px;
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    line-height: 100px;
    text-align: left;
  }

  .top-text {
    display: flex;
    justify-content: start;
  }

  .left-text {
    margin-right: 10px;
    color: #3d0072;
  }
  .right-text {
    color: #0d9488;
  }

  .bottom-text {
    color: #0d9488;
  }

  .investment-phrase {
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 50px;
    color: #3d0072;
    text-align: left;
    max-width: 789px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .arrow {
    display: flex;
    position: absolute;
    right: 15%;
    top: 2690px;
  }
  .arrow-green {
    position: relative;
    left: 51%;
  }
  .arrow-blue {
  }

  .investment-btn {
    width: 25%;
  }

  @media screen and (max-width: 800px) {
  }
`;

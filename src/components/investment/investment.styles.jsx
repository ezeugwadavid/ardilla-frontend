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
    height: 100%;
    background: #fffdf2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30% 2%;

    .interest-content {
      width: 100%;
    }

    .top-text {
      display: flex;
      justify-content: start;
      flex-direction: column;
    }

    .interest-heading {

      font-style: normal;
      font-weight: 800;
      font-size: 50px;
      line-height: 50px;
      text-align: left;
    }

    .arrow {
      display: none;
    }

    .investment-btn {
      width: 50%;
    }
  }

  @media screen and (max-width: 330px) {
    .interest-heading {
      font-size: 30px;
    }

    .investment-btn {
      width: 70%;
    }
  };

  @media screen and (min-width: 801px) and (max-width: 1109px)  {
    .arrow {
      display: none;
    }
  }

  @media screen and (min-width: 2000px) {
    .interest-content {
    width: 1250px;
  }
  }


`;

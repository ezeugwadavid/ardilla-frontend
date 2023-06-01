import styled from "styled-components";

export const SectionInterestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 660px;

  .left-interest {
    margin-right: 5%;
    text-align: left;
  }

  .interest-hero1 {
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    color: #3d0072;
  }

  .interest-hero2 {
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    color: #e8356d;
  }

  .interest-text {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
    color: #3d0072;
    margin-top: 32px;
  }

  .interest-btn {
    width: 15%;
    margin-top: 32px;
  }

  .right-interest {
    /* width: 35%; */
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 30% 2%;

    .right-interest {
      width: 90%;
      margin-top: 20px;
    }

    .left-interest {
      margin-right: 1%;
      text-align: left;
    }

    .interest-hero1 {

      font-style: normal;
      font-weight: 800;
      font-size: 50px;
      color: #3d0072;
    }

    .interest-hero2 {

      font-style: normal;
      font-weight: 800;
      font-size: 50px;
      color: #e8356d;
    }

    .interest-btn {
      width: 30%;
      margin-top: 32px;
    }
  }

  @media screen and (max-width: 330px) {
    .interest-hero1 {
      font-size: 30px;
    }

    .interest-hero2 {
      font-size: 30px;
    }
  }

  @media screen and (min-width: 801px) and (max-width: 1109px)  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10% 2%;

    .right-interest {
      width: 90%;
      margin-top: 20px;
    }

    .left-interest {
      margin-right: 1%;
      text-align: left;
    }
  }





`;

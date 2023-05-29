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
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    color: #3d0072;
  }

  .interest-hero2 {
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    color: #e8356d;
  }

  .interest-text {
    font-family: "Cabinet Grotesk", sans-serif;
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
  }
`;

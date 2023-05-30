import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 898px;
  background: #240053;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero-text {
    font-family: "Cabinet Grotesk", sans-serif;
    padding-top: 100px;
    font-style: normal;
    font-weight: 800;
    font-size: 95px;
    line-height: 110px;
    text-align: center;
    background: linear-gradient(
      91.7deg,
      #ffeb35 7.5%,
      rgba(25, 253, 130, 0.99) 107.24%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .desc {
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 32px;
    text-align: center;
    color: #ffffff;
    width: 45%;
    margin-top: 16px;
  }

  .hero-btn {
    margin-top: 40px;
  }

  .phone {
    margin-top: 70px;
  }

  @media screen and (max-width: 800px) {
    padding-top: 20%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 37%;
    .phone {
      width: 332px;
      height: 160px;
    }

    .desc {
      width: 70%;
    }
  }

  @media screen and (max-width: 330px) {
    .phone {
      width: 300px;
      height: 100px;
    }

    
  .hero-text {
    font-size: 80px;
  }
  };

  @media screen and (min-width: 357px) and (max-width: 800px)  {
    padding-bottom: 2%;
    padding-top: 10%;
  };
  @media screen and (min-width: 500px) and (max-width: 800px)  {
    padding-bottom: 0%;
    padding-top: 10%;

    .phone {
      width: 550px;
      height: 360px;
    }
  };

  @media screen and (min-width: 801px) and (max-width: 1109px)  {
    .small-mobile {
      width: 87%;
      height: 90%;
    }
  }


`;

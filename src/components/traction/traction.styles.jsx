import styled from "styled-components";

export const TractionContainer = styled.div`
  height: 1344px;
  background: #1b0132;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  .traction-content {
    width: 1150px;
  }

  .traction-heading {
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    line-height: 100px;
    color: #ffffff;
  }

  .traction-text {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }

  .traction-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 146px;
  }

  .card-container1 {
    width: 90%;
    height: 537px;
    background: #d2ffde;
    border-radius: 70px 70px 0px 70px;
    margin-right: 4%;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60%;
  }

  .top-content {
    display: flex;
  }

  .card-text {
    margin: auto 0px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #2a332c;
    margin-right: 5px;
  }

  .card-date {
    padding: 10px;
    left: 164px;
    top: 247px;
    background: #33593d;
    border-radius: 2px;
    color: #ffffff;
  }

  .card-digit {
    font-style: normal;
    font-weight: 800;
    font-size: 80.9524px;
    line-height: 100px;
    color: #2a332c;
  }

  .card-container2 {
    width: 90%;
    margin-right: 4%;
    height: 537px;
    background: #c8c1fd;
    border-radius: 70px 70px 70px 0px;
  }

  .card-text-highlighted {
    padding: 10px;
    background: #35298a;
    border-radius: 2px;
    color: #ffffff;
  }

  .card-container3 {
    width: 90%;
    margin-right: 4%;
    height: 537px;
    background: #faf7c3;
    border-radius: 70px 70px 70px 0px;
  }

  .paid {
    padding: 10px;
    background: #9f9704;
    border-radius: 2px;
    color: #ffffff;
  }

  @media screen and (max-width: 800px) {
    height: 100%;
    padding: 30% 2%;

    .traction-content {
      width: 100%;
    }

    .traction-heading {
      font-size: 50px;
    }

    .traction-cards {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 146px;
    }

    .card-container1 {
      width: 90%;
      height: 537px;
      background: #d2ffde;
      border-radius: 70px 70px 0px 70px;
      margin-bottom: 10%;
      margin-right: 0%;
    }

    .card-container2 {
      width: 90%;
      margin-right: 0%;
      margin-bottom: 10%;
      height: 537px;
      background: #c8c1fd;
      border-radius: 70px 70px 70px 0px;
    }

    .card-container3 {
      width: 90%;
      margin-right: 0%;
      margin-bottom: 40%;
      height: 537px;
      background: #faf7c3;
      border-radius: 70px 70px 70px 0px;
    }
  }

  @media screen and (min-width: 500px) and (max-width: 800px)  {
    .card-content {
    margin-top: 35%;
  }
  };


`;

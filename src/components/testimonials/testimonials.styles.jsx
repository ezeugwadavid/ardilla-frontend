import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 952px;
  background: #f3f4f6;

  .testm-content {
  }

  .testm-header {
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 80px;
    line-height: 125.9%;
    color: #3d0072;
    text-align: left;
  }

  .coloured {
    color: #e8356d;
  }

  .testm-text {
    font-family: "Cabinet Grotesk", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #3d0072;
    text-align: left;
    margin-bottom: 105px;
  }

  .photo-container {
    display: flex;
    justify-content: space-evenly;
    max-width: 1100px;
  }

  .image {
    width: 350px;
    height: 300px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 15.9715px;
  }

  .image:hover {
    width: 360px;
    height: 310px;
    border-radius: 0px;
  }

  @media screen and (max-width: 800px) {
    height: 100%;
    padding: 30% 2%;

    .testm-header {
      font-family: "Cabinet Grotesk", sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 50px;
      line-height: 125.9%;
      color: #3d0072;
      text-align: left;
    }

    .testm-content {
      width: 100%;
    }

    .photo-container {
      display: flex;
      justify-content: space-evenly;
      max-width: 98%;
    }

    .image {
      width: 97%;
      height: 87%;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 15.9715px;
    }

    .image:hover {
      width: 100%;
      height: 90%;
      border-radius: 0px;
    }
  }

  @media screen and (min-width: 801px) and (max-width: 1109px) {
    height: 100%;
    padding: 30% 2%;

    
    .testm-content {
      width: 100%;
    }

    .photo-container {
      display: flex;
      justify-content: space-evenly;
      max-width: 98%;
    }

    .image {
      width: 97%;
      height: 87%;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 15.9715px;
    }

    .image:hover {
      width: 100%;
      height: 90%;
      border-radius: 0px;
    }
  }
`;

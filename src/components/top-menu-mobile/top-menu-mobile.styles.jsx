import styled from "styled-components";

export const TopMenuMobileContainer = styled.div`
  @media screen and (max-width: 800px) {
    .top-nav {
      position: fixed;
      background: #240053;
      z-index: 2;
      left: 0%;
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .hide-menu {
      display: none;
    }

    .left-ard-logo {
      width: 97.25px;
      height: 32px;
      margin-left: 10px;
    }

    .right-menu-icon {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }

    .close-btn {
      margin-bottom: 20%;
      font-size: 30px;
      font-weight: 700px;
      margin-left: 10px;
      margin-top: 10px;
      text-align: left;
    }

    .nav-menu {
      position: fixed;
      left: 50%;
      height: 100vh;
      width: 50%;
      background: #ffffff;
      color: #240053;
      z-index: 3;
      font-weight: 500;
      font-size: 20px;
      line-height: 17px;
      font-family: "Cabinet Grotesk", sans-serif;
      transition: 1s left;
    }

    .hide-nav {
      position: fixed;
      transition: 1s right;
      right: 0%;
      height: 0vh;
      width: 0%;
      visibility: hidden;
    }

    .list {
      padding-top: 7%;
      padding-bottom: 7%;
      text-align: left;
      padding-left: 5%;
    }

    .list1,
    .list2,
    .list3 {
      display: flex;
      justify-content: start;
    }

    .list-highlighted {
      background: #240053;
      color: #ffffff;
    }

    .prod-name {
      margin-right: 40%;
    }
    .prod-name {
      margin-right: 40%;
    }
    .business-name {
      margin-right: 5%;
    }

    .cmpy-name {
      margin-right: 40%;
    }

    .hr {
      border: 1px solid #6b7280;
      width: 100%;
      height: 0px;
      margin-top: 5%;
      margin-bottom: 5%;
    }
  }
`;

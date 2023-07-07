import styled from "styled-components";

export const MerchantHomeContainer = styled.div`
  width: 100%;

  .merchant-main {
    display: flex;
    justify-content: space-between;
  }

  .merchant-right {
    width: 67%;
    margin: auto 0px;
    position: relative;
    left: 30%;
  }

  .select-content{
    padding: 5%;
  }

  .merchant-left {
    position: fixed;
    height: 100%;
    width: 33%;
    padding: 0px;
    display: flex;
    justify-content: start;
  }

  .h-logo {
    display: flex;
    justify-content: end;
  }

  .merchant-section {
    margin-top: 30px;
  }

  .merchant-header-1 {
    font-weight: 800;
    font-size: 15px;
    text-align: left;
    color: #000000;
  }

  .merchant-header-2 {
    font-weight: 600;
    font-size: 13px;
    text-align: left;
    margin-top: 10px;
    color: #999999;
    /* text-shadow: 4px 4px 2px rgba(0,0,0,0.2); */
  }

  .merchant-box-content {
    display: flex;
  }

  .to-merchant{
    text-decoration: none;
    color: #000000;
  }

  .merchant-box {
    padding: 5%;
    background: #fafafa;
    border-radius: 10px;
    margin-top: 20px;
    width: 90%;
    cursor: pointer;
  }

  .merchant-box:hover {
    padding: 5%;
    background: #fafafa;
    border-radius: 10px;
    margin-top: 20px;
    width: 90%;
    border: 1px solid #328A28;
    cursor: pointer;
  }

  .left-b-icon {
    margin-right: 30px;
  }

  .center-content {
    margin-right: 40px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .first-top {
    font-size: 11px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 5px;
  }

  .second-top {
    font-size: 10px;
    font-weight: bold;
    text-align: left;
    color: #9ca3af;
  }

  .right-arr-img {
    margin: auto auto;
  }

  .right-b-arrow {
    margin-left: 40%;
    margin-top: auto;
    margin-bottom: auto;
  }

  .soon-btn{
    margin-left: 40%;
    margin-top: auto;
    margin-bottom: auto;
    background-color: #228B22;
    font-size: 8px;
    padding: 5px;
    border-radius: 10px;
    color: #ffffff;
  }

  .btm-text{
    font-size: 10px;
    font-weight: 600;
    margin-top: 30px;
    display: flex;
    justify-content: start;
  }

  .b-text-right{
    color: #23A323;
    margin-left: 5px;
  }

  @media screen and (max-width: 800px) {
    .merchant-right {
    width: 100%;
    margin: auto 0px;
    position: relative;
    left: 0%;
  }

  .merchant-box {
    padding: 3%;
    background: #fafafa;
    border-radius: 10px;
    margin-top: 20px;
    width: 94%;
    cursor: pointer;
  }

  .merchant-box:hover {
    padding: 5%;
    background: #fafafa;
    border-radius: 10px;
    margin-top: 20px;
    width: 100%;
    border: 1px solid #328A28;
    cursor: pointer;
  }

  .center-content {
    width: 100%;
    margin-right: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .select-content{
    padding: 2%;
  }
  }
`;

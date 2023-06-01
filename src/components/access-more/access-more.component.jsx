import React from "react";
import { AccessMoreContainer } from "./access-more.styles";
import DibIcon from "../../assets/dib.svg";
import DreamsIcon from "../../assets/dreams.svg";
import VaultIcon from "../../assets/vault.svg";
import GritIcon from "../../assets/grit.svg";
import ButtonIcon from "../button-icon/button-icon.component";

const AccessMore = () => {
  return (
    <AccessMoreContainer>
      <div className="access-container">
        <div className="access-header">Access More With Your Money</div>
        <div className="access-phrase">
          Earn, learn, parlay, and grow financially. With Ardilla, you have more
          opportunities than ever at your finger tips. Why not take advantage
          today?
        </div>
        <ButtonIcon
          className="access-btn"
          borderColor="#ffffff"
          iconType="white"
        >
          Invest with ardilla (Coming Soon)
        </ButtonIcon>
        <div className="box">
          <div className="inner-box">
            <img className="dib-icon" src={DreamsIcon} alt="" />
            <div className="box-topic">Dreams</div>
            <div className="box-text">
              Helping you make your dreams a reality is important to us. We have
              helped so many others. We can help you as well.
            </div>
            <div className="bottom-link">Learn More</div>
          </div>
          <div className="inner-box">
            <img className="dib-icon" src={DibIcon} alt="" />
            <div className="box-topic">DIB</div>
            <div className="box-text">
              Nothing beats an emergency quite like an emergency fund. With
              Ardilla you can get started building that emergency fund.
            </div>
            <div className="bottom-link">Learn More</div>
          </div>
          <div className="inner-box">
            <img className="dib-icon" src={VaultIcon} alt="" />
            <div className="box-topic">Vault</div>
            <div className="box-text">
              Lock away excess funds you don't know what to do with. We can help
              you safeguard it till you are ready. It definitely beats spending
              it and wondering where all that money went to.
            </div>
            <div className="bottom-link">Learn More</div>
          </div>
          <div className="inner-box">
            <img className="dib-icon" src={GritIcon} alt="" />
            <div className="box-topic">Grit</div>
            <div className="box-text">
              {" "}
              Become a VIP when you save more money with us. Enjoy better
              benefits.
            </div>
            <div className="bottom-link">Learn More</div>
          </div>
        </div>
      </div>
    </AccessMoreContainer>
  );
};

export default AccessMore;

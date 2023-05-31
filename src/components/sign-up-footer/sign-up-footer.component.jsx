import React from "react";
import { SignUpFooterContainer } from "./sign-up-footer.styles";
import RightArrow from "../../assets/scroll-right.svg";
import AccessCard from "../../assets/access-more-card.svg";
import InvestmentCard from "../../assets/investment-card.svg";
import MoreSavings from "../../assets/more-savings.svg";
import WealthBuilding from "../../assets/wealth-building.svg";
import BuildWealth from "../../assets/build-wealth.svg";
import Budgeting from "../../assets/budgeting.svg";
import SanId from "../../assets/san-id.svg";
import FinancialAdvice from "../../assets/financial-advice.svg";
import ProgressSmall from "../../assets/progress-small.svg";
import FacebookEllipse from "../../assets/facebook-ellipse.svg";
import InstagramEllipse from "../../assets/instagram-ellipse.svg";
import TwitterEllipse from "../../assets/twitter-ellipse.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SignUpFooter = () => {

    const slideCards = [
        {
          id: 1,
          src: InvestmentCard,
        },
        {
          id: 2,
          src: MoreSavings,
        },
        {
          id: 3,
          src: WealthBuilding,
        },
        {
          id: 4,
          src: FinancialAdvice,
        },
        {
          id: 5,
          src: BuildWealth,
        },
        {
          id: 6,
          src: Budgeting,
        },
        {
          id: 7,
          src: SanId,
        },
      ];



  return (
    <SignUpFooterContainer>
        <div className="footer-container">
            <div className="ellipse-background">What you can expect</div>
           
            <img className="right-arr"  src={RightArrow} alt="" />
            <div className="footer-cards">
            <Swiper slidesPerView={4} spaceBetween={0}>
                {/* <img className="access cards"  src={AccessCard} alt="" /> */}
                {slideCards.map((card) => {
              return (
                <SwiperSlide index={card.id}>
                 <img className="cards" src={card.src} alt="" />
                </SwiperSlide>
              );
            })}
                </Swiper>
            </div>
            <div className="progress">
                <img className="progress-status" src={ProgressSmall} alt="" />
            </div>

           
        </div>
        <div className="sign-up-footer">
                <div className="left-details"> © 2023 Ardilla. All right reserved</div>
                <div className="right-social-icons">
                    <img className="social-ic" src={FacebookEllipse} alt="" />
                    <img className="social-ic" src={InstagramEllipse} alt="" />
                    <img className="social-ic" src={TwitterEllipse} alt="" />
                </div>
            </div>
    </SignUpFooterContainer>
  );
};

export default SignUpFooter;

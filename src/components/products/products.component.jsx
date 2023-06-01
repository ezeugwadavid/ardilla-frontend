import React from "react";
import { ProductsContainer } from "./products.styles";
import Tick from "../../assets/tick.svg";
import PhoneRight from "../../assets/phone-right.svg";
import Invest from "../../assets/invest.svg";
import Learn from "../../assets/learn.svg";
import Insurance from "../../assets/insurance.svg";
import Budget from "../../assets/budget.svg";
import LinearProgress from '@mui/material/LinearProgress';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Products = (props) => {
  const productsData = [
    {
      id: 1,
      type: "Save",
      imageSrc: PhoneRight,
      phrase: "Save at your own pace",
      productText:
        "Save your money daily, weekly, or monthly. No pressure. We work at your pace",
      productPoints: [
        {
          id: 1,
          point: "Create Unlimted savings plans",
        },
        {
          id: 2,
          point: "Withdraw anytime",
        },
        {
          id: 3,
          point: "Save with Friends with SAN ID",
        },
        {
          id: 4,
          point: "Be better at saving",
        },
        {
          id: 5,
          point: "Accountability profile",
        },
        {
          id: 6,
          point: "Activity and report",
        },
      ],
    },

    {
      id: 2,
      type: "Learn",
      imageSrc: Learn,
      phrase: "Financial freedom begins with You and Ardilla",
      productText:
        "Ardila offers wealth-building tips from great financial minds to help you get to where you need to be.",
      productPoints: [
        {
          id: 1,
          point: "Learn to invest in 2hrs",
        },
        {
          id: 2,
          point: "Get a portfolio manager",
        },
        {
          id: 3,
          point: "Stay on top of your finances",
        },
        {
          id: 4,
          point: "Learn with family and friends",
        },
        {
          id: 5,
          point: "Earn points and reward",
        },
        {
          id: 6,
          point: "Referral benefits",
        },
      ],
    },
    {
      id: 3,
      type: "Invest",
      imageSrc: Invest,
      phrase: "Multiply your finances",
      productText:
        "Investment opportunities that gets you closer to financial freedom",
      productPoints: [
        {
          id: 1,
          point: "Portfolio mangement",
        },
        {
          id: 2,
          point: "Track your returns",
        },
        {
          id: 3,
          point: "Track your returns",
        },
        {
          id: 4,
          point: "Vetted Investment opportuinities",
        },
        {
          id: 5,
          point: "Invest within your risk appetite",
        },
        {
          id: 6,
          point: "Invest in Naira and Dollars",
        },
      ],
    },

    {
      id: 4,
      type: "Budget",
      imageSrc: Budget,
      phrase: "Plan your money",
      productText: "Every good budget starts with a good plan for your money",
      productPoints: [
        {
          id: 1,
          point: "Save as you spend",
        },
        {
          id: 2,
          point: "Track your expenses",
        },
        {
          id: 3,
          point: "Organize your finances",
        },
        {
          id: 4,
          point: "Sync and share budgets",
        },
        {
          id: 5,
          point: "Financial guide",
        },
        {
          id: 6,
          point: "Better decision-making",
        },
      ],
    },
    {
      id: 5,
      type: "Insurance",
      imageSrc: Insurance,
      phrase: "Protect your interest",
      productText: "Stay protected, live freely",
      productPoints: [
        {
          id: 1,
          point: "Vehicle insurance",
        },
        {
          id: 2,
          point: "Home insurance",
        },
        {
          id: 3,
          point: "Mutual Insurance",
        },
        {
          id: 4,
          point: "Life Insurance",
        },
        {
          id: 5,
          point: "Health Insurance",
        },
        {
          id: 6,
          point: "Travel Insurance",
        },
      ],
    },
  ];

const min = 1;
const max = 5;
const normalise = (value) => ((value - min) * 100) / (max - min);

  return (
    <ProductsContainer>
      <div className="headline">
        <div className="header">Products</div>
      </div>
      <Swiper slidesPerView={1} spaceBetween={0}>
        {productsData.map((product) => (
          <SwiperSlide index={product.id}>
            <div>
              <div className="product-content-container">
                <div className="left">
                  <div className="product-type">{product.type}</div>
                  <div className="product-phrase">{product.phrase}</div>
                  <div className="product-text">{product.productText}</div>
                  {product.productPoints.map((point) => {
                    return (
                      <div index={point.id} className="product-points">
                        <img className="tick" src={Tick} alt="" />
                        <div className="points-text">{point.point}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="right">
                  <img className="small-mobile" src={product.imageSrc} alt="" />
                </div>
              </div>
              <div className="progress-bottom">
                <LinearProgress
                  sx={{
                    "& .MuiLinearProgress-bar1Determinate": {
                      backgroundColor: "#8807F7"
                    },
                  }}
                  className="progress-bar"
                  variant="determinate"
                  value={normalise(product.id)}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ProductsContainer>
  );
};

export default Products;

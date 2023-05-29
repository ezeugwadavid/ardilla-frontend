import React, { useState } from "react";
import { ProductsContainer } from "./products.styles";
import Tick from "../../assets/tick.svg";
import PhoneRight from "../../assets/phone-right.svg";
import Progress from "../../assets/progress.svg";

const Products = (props) => {
  const productsData = {
    product1: {
      type: "Save",
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
      imageType: "Save",
    },
  };

  return (
    <ProductsContainer>
      <div className="headline">
      <div className="header">Products</div>
      </div>
      <div className="product-content-container">
        <div className="left">
          <div className="product-type">Save</div>
          <div className="product-phrase">Save at your own pace!</div>
          <div className="product-text">
            Save your money daily, weekly, or monthly. No pressure. We work at
            your pace
          </div>
          {productsData.product1.productPoints.map((product) => (
            <div index={product.id} className="product-points">
              <img className="tick" src={Tick} alt="" />
              <div className="points-text">{product.point}</div>
            </div>
          ))}
        </div>
        <div className="right">
          <img src={PhoneRight} alt="" />
        </div>
      </div>
      <div className="progress-bottom">
      <img className="progress" src={Progress} alt="" />
      </div>

    </ProductsContainer>
  );
};

export default Products;

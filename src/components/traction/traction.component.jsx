import React from "react";
import { TractionContainer } from "./traction.styles";

const Traction = () => {
  return (
    <TractionContainer>
      <div className="traction-content">
        <div className="traction-heading">Traction</div>
        <div className="traction-text">Our products and investments grossed 1.1 billion in 2022</div>
        <div className="traction-cards">
          
            <div className="card-container1">
                <div className="card-content">
                    <div className="top-content">
                        <div className="card-text">Investment in</div>
                        <div className="card-date">2022</div>
                    </div>
                    <div className="card-digit">
                        # 100 M
                    </div>
                </div>
            </div>
             
            <div className="card-container2">
            <div className="card-content">
                    <div className="top-content">
                        <div className="card-text">Risk</div>
                        <div className="card-text-highlighted">Management</div>
                    </div>
                    <div className="card-digit">
                        0% Risk
                    </div>
                </div>
            </div>
            

            <div className="card-container3">
            <div className="card-content">
                    <div className="top-content">
                        <div className="card-text">Investment</div>
                        <div className="paid">paid back</div>
                    </div>
                    <div className="card-digit">
                        # 100 M
                    </div>
                </div>

            </div>

            
        </div>

      </div>
    </TractionContainer>
  );
};

export default Traction;

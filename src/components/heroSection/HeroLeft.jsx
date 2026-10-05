import React from "react";
import CompButton from "../button/CompButton";
import RightArrow from "../../assets/right_arrow.svg"
import Badges from "../Badges";

const HeroLeft = () => {
  return (
    <div className="left_side">
      <div className="calculator_parent">
        <div className="Calc_head">
          <div className="calc_content">
            <p>LIVE CALCULATOR</p>
            <p>Send money internationally</p>
          </div>

          <Badges className="calc_badge" dot children="Rates locked 30m" />

          {/* <div className="calc_badge">
            <span></span>Rates locked 30m
          </div> */}

        </div>

        {/* calc-body starts  */}

        <div className="calc_body">

          <div className="sender_section">
            <div className="sender_bg">
              <p className="role">YOU SEND</p>
              <div className="amount_sec">
                <p className="sender_amount">
                  <span className="currency_symbol">₹</span>1,00,000
                </p>
                <select name="country" id="country">
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
              </div>
            </div>
          </div>

          <div className="sender_section">
            <div className="sender_bg">
              <p className="role">RECIPIENT GETS</p>
              <div className="amount_sec">
                <p className="sender_amount">
                  <span className="currency_symbol">$</span>1,179.09
                </p>
                <select name="country" id="country">
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* calc-body ends  */}

        <CompButton 
         text="Continue transfer"
         icon = {RightArrow}
        className="blue_btn fullWidthBtn"
        />


      </div>
    </div>
  );
};

export default HeroLeft;

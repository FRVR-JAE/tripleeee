import React from "react";
import "../styles/services.css"
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const Services = () => {
  return (
    <div className="services-section">
         <h2>Services</h2>
      <div className="services-grid">
        <div className="service-box">
        <BiSolidFoodMenu />
          <p>
          Menu Planning
          </p>
        </div>
        <div className="service-box">
         <FaUsers />
          <p>
           Staffing
          </p>
        </div>
        <div className="service-box">
        <TbTruckDelivery />
          <p>
          Delivery and Pick-Up
          </p>
        </div>
        <div className="service-box">
        <GiPartyPopper />
          <p>
          Theme and Decor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

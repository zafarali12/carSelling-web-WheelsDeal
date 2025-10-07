import React from "react";
import WhyUsCard from "./WhyUsCard";
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";

const WhyUs = () => {
  const icon1 = <SiWebmoney className="text-primary mx-auto" size={48} />;
  const icon2 = <FaUsers className="text-primary mx-auto" size={48} />;
  const icon3 = <FaShippingFast className="text-primary mx-auto" size={48} />;

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Why choose <span className="text-primary">WheelsDeal</span>?
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        We provide a seamless car buying experience with flexible financing,
        trusted customer service, and fast delivery options to get you on the
        road quickly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <WhyUsCard icon={icon1} title="Financing Options" />
        <WhyUsCard icon={icon2} title="Satisfied Customers" />
        <WhyUsCard icon={icon3} title="Fast & Easy Booking" />
      </div>
    </div>
  );
};

export default WhyUs;

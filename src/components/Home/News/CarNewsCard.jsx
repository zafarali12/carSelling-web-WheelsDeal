import React from "react";

const CarNewsCard = ({ img, desc }) => {
  return (
    <div className="border-2 border-secondary rounded-lg cursor-pointer overflow-hidden bg-white hover:shadow-lg hover:scale-95 transition-transform duration-300 ease-in-out">
      <img
        src={img}
        alt="news"
        className="w-full h-56 object-cover rounded-t-lg"
      />
      <div className="p-3">
        <h3 className="font-semibold text-base md:text-lg text-gray-800">
          {desc}
        </h3>
      </div>
    </div>
  );
};

export default CarNewsCard;

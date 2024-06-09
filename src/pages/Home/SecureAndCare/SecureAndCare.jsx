import React from "react";
import "./secureAndCare.css";
import SecureCard from "../../../components/SecureCard/SecureCard";
import { FaBox, FaLock, FaHandHoldingHeart } from "react-icons/fa";

const cardData = [
  {
    _id: "1",
    secure_title: "SECURE PAYMENT",
    secure_text: "All our payments our SSL secured",
    icon: <FaLock />,
  },
  {
    _id: "2",
    secure_title: "DELIVERED WITH CARE",
    secure_text: "Super fast shipping to your door",
    icon: <FaBox />,
  },
  {
    _id: "3",
    secure_title: "EXCELLENT SERVICE",
    secure_text: "Live chat and phone support",
    icon: <FaHandHoldingHeart />,
  },
];

const SecureAndCare = () => {
  return (
    <div className="secure-container container">
      {cardData?.map((data) => (
        <SecureCard key={data?._id} data={data} />
      ))}
    </div>
  );
};

export default SecureAndCare;

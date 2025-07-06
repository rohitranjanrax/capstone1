import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import pricingImg from "../assets/pricing.jpg"; // ✅ Importing the image

const Pricing = () => {
  const pricing = [
    {
      imgUrl: pricingImg,
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: pricingImg,
      title: "HEAL_YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: pricingImg,
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
      <h1>RR FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => (
          <div className="card" key={element.title}>
            <img src={element.imgUrl} alt={element.title} />
            <div className="title">
              <h1>{element.title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {element.price}</h3>
              <p>For {element.length} Months</p>
            </div>
            <div className="description">
              <p>
                <Check /> Equipment
              </p>
              <p>
                <Check /> All Day Free Training
              </p>
              <p>
                <Check /> Free Restroom
              </p>
              <p>
                <Check /> 24/7 Skilled Support
              </p>
              <p>
                <Check /> 20 Days Freezing Option
              </p>
              <Link to={"/"}>Join Now</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

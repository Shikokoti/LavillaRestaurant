import React from "react";

const movingText = [
  {
    white: "To Make A Reservation Please Call Us ",  
    yellow: "Or Text Via WhatsApp 0n +254706880688",
  },
  {
    white: "Come lets Dine Together at",
    yellow: "Lavilla Restaurant & Wine Bar",
  },
];

export default function MovingText() {
  return (
    <div className="ak-moving-section-wrap ak-normal text-uppercase">
      <div className="ak-moving-section-in">
        {movingText?.map((text, i) => (
          <div className="ak-moving-section" key={i}>
            <h2>
              {text.white} <span>{text.yellow}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

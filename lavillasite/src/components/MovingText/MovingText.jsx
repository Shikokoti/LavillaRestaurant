import React from "react";

const movingText = [
  {
    white: "",
    yellow: "",
  },
  {
    white: "make a reservation",
    yellow: "on +254706880688",
  },
];

export default function MovingText() {
  return (
    <div className="ak-moving-section-wrap ak-normal lowercase">
      <div className="ak-moving-section-in">
        {movingText?.map((text, i) => (
          <div className="ak-moving-section" key={i}>
            <h3 className="tracking-wide md:tracking-widest">
              {text.white} <span className="text-yellow-400">{text.yellow}</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

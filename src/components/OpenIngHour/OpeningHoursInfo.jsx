import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ImgesOverlay from "../ImgesOverlay/ImgesOverlay";
import { ButtonCommon } from "../Button/Button";
import classNames from "classnames";

const Openinginfo = {
  title: "Opening Hours",
  image: "/assets/img/about/about10.jpg",
  subtext:
    "Lavilla, where culinary artistry meets exceptional dining experiences. At Lavilla, we strive to create a gastronomic haven that.",
  open: "MON: 17:30PM - 23:00PM",
  close: "TUE - SAT: 12:00PM - 23:00PM",
  open2: "SUN: 12:00PM - 21:30PM",
};

export default function OpeningHoursInfo({ typeTwo }) {
  const { title, image, subtext, open, close, open2 } = Openinginfo;

  const openingHour = classNames("opening-hour", {
    "type-2": typeTwo,
  });

  const openingHourimg = classNames("opening-hour-img-section", {
    "style-2": typeTwo,
  });
  const openingHourtext = classNames("opening-hour-text-section", {
    "type-2": typeTwo,
  });
  return (
    <>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className={typeTwo ? "container" : "ak-bg-secendary"}>
        <div className={openingHour}>
          <div className={openingHourimg}>
            <ImgesOverlay image={image} imagesZoom={true} />
          </div>
          <div className={openingHourtext}>
            <SectionTitle title={title} animTwo={true} />
            <div className="ak-height-30 ak-height-lg-30"></div>
            <p className="opening-hour-subtext">{subtext}</p>
            {(open || close || open2) && (
  <>
    <div className="ak-height-30 ak-height-lg-30"></div>
    <div className="opening-hour-date">
      {open && <p>{open}</p>}
      {close && (
        <>
          <div className="opening-hour-hr"></div>
          <p>{close}</p>
        </>
      )}
      {open2 && (
        <>
          <div className="opening-hour-hr"></div>
          <p>{open2}</p>
        </>
      )}
    </div>
  </>
)}

            <div className="ak-height-70 ak-height-lg-30"></div>
            <ButtonCommon to="/reservations">Reservation</ButtonCommon>
          </div>
        </div>
      </div>
    </>
  );
}

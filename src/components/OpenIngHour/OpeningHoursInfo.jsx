import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ImgesOverlay from "../ImgesOverlay/ImgesOverlay";
import { ButtonCommon } from "../Button/Button";
import classNames from "classnames";

const Openinginfo = {
  title: "Opening Hours",
  image: "/assets/img/about/about_open_hour.jpg",
  subtext:
    "Lavilla, where culinary artistry meets exceptional dining experiences. At Lavilla, we strive to create a gastronomic haven that.",
  open: "MONDAY - 17:30PM - 22:30PM",
  close: "TUESDAY & SATURDAY: 12:00PM - 23:30PM",
  open2: "SUNDAY: 12:00PM - 22:00PM",
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
            {open && close? (
              <>
                <div className="ak-height-30 ak-height-lg-30"></div>
                <div className="opening-hour-date">
                  <p>{open}</p>
                  <div className="opening-hour-hr"></div>
                  <p> {close}</p>
                </div>
              </>
            ) : (
              ""
            )}

            <div className="ak-height-70 ak-height-lg-30"></div>
            <ButtonCommon to="/reservations">Reservation</ButtonCommon>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import LocationConatiner from "../components/LocationCardItem/LocationConatiner";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import CommonHero from "../components/CommonHero/CommonHero";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import CommentConatctFrom from "../components/Comment/CommentConatctFrom";

export default function Contact() {
  return (
    <>
      <CommonHero title={"Contact Us"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <div className="contact-content">
          <div className="contact-form">
            <div className="contact-form-title ">
              <SectionTitle animTwo={true} textWhite={"Contact Us"} />
            </div>
            <CommentConatctFrom />
          </div>
          <div className="contact-map">
            <GoogleMap addressLink="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31911.085591123723!2d36.780416!3d-1.23886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f198ef85004c3%3A0xefb5fc6d518faa6!2sLa%20Villa%20Italian%20Restaurant%20%26%20Wine%20Bar!5e0!3m2!1sen!2sus!4v1761584314280!5m2!1sen!2sus" />
          </div>
        </div>
      </div>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <SectionTitle
          title={"Nearby Find Us"}
          subTitle={"Visit us"}
          tyle={"center"}
        />
        <div className="ak-height-65 ak-height-lg-30"></div>
        <LocationConatiner />
      </div>
    </>
  );
}

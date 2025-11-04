import { useLayoutEffect, useRef } from "react";
import CommonHero from "../components/CommonHero/CommonHero";
import DrinksMenuItem from "../components/FoodMenu/DrinksMenuItem";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { imageZoomInOut } from "../helper/main";
import drinksmenulist from "../dataJson/drinksmenulist.json";

export default function DrinksMenu() {
  const imageContainers = useRef([]);
  const imageZoomIns = useRef([]);

  useLayoutEffect(() => {
    drinksmenulist.forEach((drinks, index) => {
      if (imageContainers.current[index] && imageZoomIns.current[index]) {
        imageZoomInOut(
          imageContainers.current[index],
          imageZoomIns.current[index]
        );
      }
    });
  }, []);

  return (
    <div>
      <CommonHero title="Our Drinks Menu" link="/" />
      {drinksmenulist?.map((item, i) => (
        <div
          key={i}
          className="set-bg-img-section"
          ref={(el) => (imageContainers.current[i] = el)}
        >
          <img
            src={item.bgImgShow}
            alt="..."
            className="imagesZoom bg-img ak-bg"
            ref={(el) => (imageZoomIns.current[i] = el)}
          />

          <div className="ak-height-150 ak-height-lg-60"></div>
          <div className="container">
            <SectionTitle
              title={item.headingtext.title}
              subTitle={item.headingtext.subTitle}
              style={item.headingtext.tyle}
            />
            <div className="ak-height-65 ak-height-lg-30"></div>
            <div className="ak-menu-list">
              {item?.DrinksMenu?.map((drink, index) => (
                <DrinksMenuItem key={index} data={drink} />
              ))}
              
            </div>
          </div>

          <div className="ak-height-150 ak-height-lg-0"></div>
          <div className="ak-height-150 ak-height-lg-60"></div>
        </div>
      ))}
    </div>
  );
}

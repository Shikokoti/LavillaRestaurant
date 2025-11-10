import { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import { foodMenuHr, overImageShows } from "../../helper/main";

export default function WineMenuItem({ data }) {
  const menuListSection = useRef(null);
  const border = useRef(null);
  const bordertwo = useRef(null);

  const { title, price, image, subTitle, priceSubTitle } = data;

  useLayoutEffect(() => {
    overImageShows(menuListSection.current);
    foodMenuHr(border.current);
    foodMenuHr(bordertwo.current);
  }, []);
  return (
    <div className="ak-menu-list-section-1" ref={menuListSection}>
      <img src={image} alt="..." />
      <div className="food-menu style-1">
        <div className="food-menu-section-1">
          <div className="food-menu-title">
            <p>{title}</p>
          </div>
          <div className="food-menu-hr">
            <div className="food-menu-hr style-1" ref={border}></div>
            <div className="food-menu-hr style-1" ref={bordertwo}></div>
          </div>
          <div className="food-menu-price">
            <p>{price}</p>
          </div>
        </div>
        <div className="food-menu-section-2">
          <div className="food-menu-subsitle">
            <p>{subTitle}</p>
          </div>
          <div className="food-menu-price-subsitle">
            <p>{priceSubTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

WineMenuItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    subTitle: PropTypes.string,
    priceSubTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

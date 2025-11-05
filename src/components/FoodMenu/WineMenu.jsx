import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import WineMenuItem from "./WineMenuItem";
import { ButtonCommon } from "../Button/Button";

import itemShow from "/assets/img/itemShow/food-menu.png";

const foodMenu = [
  {
    title: "Breggio D’amore",
    price: "Ksh 2450",
    image: "/assets/img/itemShow/item-show.png",
    subTitle: "Creamy Philadelphia Cheese and Bocconcini Soft Mozzarella",
    priceSubTitle: "",
  },
  {
    title: "Caprese Salad",
    price: "Ksh 1200",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Elegance of Mediterranean cuisine with freshly sliced Mozzarella",
    priceSubTitle: "",
  },
  {
    title: "Salmon Croquettes ",
    price: "Ksh 2000",
    image: "/assets/img/itemShow/item-show.png",
    subTitle: "Savory flavor of salmon",
    priceSubTitle: "",
  },
  {
    title: "Ravioli Dentice Ripieno",
    price: "Ksh 2150",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Home-made Ravioli, generously filled with tender red snapper",
    priceSubTitle: "",
  },
  {
    title: "Ravioli Al Tartufo",
    price: "Ksh 2200",
    image: "/assets/img/itemShow/item-show.png",
    subTitle: "Spaghetti alla Carbonara",
    priceSubTitle: "",
  },
  {
    title: "Tagliatelle Al Tartufo",
    price: "Ksh 1800",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Home-made Tagliatelle Pasta with Fresh Truffle Shavings",
    priceSubTitle: "",
  },
  {
    title: "Tagliatelle In Burrata",
    price: "Ksh 2450",
    image: "/assets/img/itemShow/item-show.png",
    subTitle: "Homemade Tagliatelle Pasta with Creamy Richness of Burrata",
    priceSubTitle: "",
  },
  {
    title: "Focaccia Italiana",
    price: "Ksh 1700",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Spaghetti alla CarbonaraFresh Rocket Leaves, Mozzarella, Cherry Tomato",
    priceSubTitle: "",
  },
  {
    title: "Crème Brulee",
    price: "Ksh 800",
    image: "/assets/img/itemShow/item-show.png",
    subTitle: "Rich creamy custard ",
    priceSubTitle: "",
  },
  {
    title: "Dubai Chocolate Gelato",
    price: "Ksh 650",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Indulge in our Dubai Chocolate Gelato",
    priceSubTitle: "",
  },
];

export default function FoodMenuHome({ styleTwo }) {
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <SectionTitle
          title={"Chef Special"}
          subTitle={"Lavilla"}
          tyle={"center"}
        />
        <div className="ak-height-65 ak-height-lg-30"></div>
        {styleTwo == true ? (
          <div className="d-flex justify-content-between flex-wrap gap-5 gap-md-0">
            <div className="ak-menu-list style-2">
              {foodMenu?.slice(0, 5).map((item, index) => {
                return <WineMenuItem key={index} data={item} />;
              })}
            </div>
            <div>
              <img src={itemShow} alt="..." />
            </div>
          </div>
        ) : (
          <div className="ak-menu-list">
            {foodMenu?.map((item, index) => {
              return <WineMenuItem key={index} data={item} />;
            })}
          </div>
        )}

        <div className="ak-height-20 ak-height-lg-20"></div>

        <div className="text-md-center">
          <ButtonCommon to="/menu">View more</ButtonCommon>
        </div>
      </div>
    </section>
  );
}

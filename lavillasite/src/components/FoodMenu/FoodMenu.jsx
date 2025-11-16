import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import FoodMenuItem from "./FoodMenuItem";
import { ButtonCommon } from "../Button/Button";

// import itemShow from "/assets/img/itemShow/food-menu.png";

const foodMenu = [
  {
    title: "Tagliere With Truffle",
    price: "Ksh 2250",
    image: "",
    subTitle: "CMixed Truffle Cold cuts: (Cinghiale) Italian Wild Bore Salami with Truffle,Pecorino Truffle &amp; Mortadella Truffle &amp; Bruschetta topped with Truffled Porcini Mushrooms",
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
    title: "Tartare Di Manzo ",
    price: "Ksh 2300",
    image: "",
    subTitle: "SBeef tartar, drizzled with truffle oil and topped with freshly grated truffle",
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
    image: "",
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
    image: "",
    subTitle: "Homemade Tagliatelle Pasta with Creamy Richness of Burrata",
    priceSubTitle: "",
  },
  {
    title: "Gnocchi With White Lamb Ragu ",
    price: "Ksh 1700",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Tender, pillowy potato gnocchi served with a delicate white lamb ragu, slowly cooked with aromatic herbs, white wine, and fresh vegetables",
    priceSubTitle: "E",
  },
  {
    title: "Crème Brulee",
    price: "Ksh 800",
    image: "",
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
                return <FoodMenuItem key={index} data={item} />;
              })}
            </div>
            <div>
             
            </div>
          </div>
        ) : (
          <div className="ak-menu-list">
            {foodMenu?.map((item, index) => {
              return <FoodMenuItem key={index} data={item} />;
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

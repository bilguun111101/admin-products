import React from "react";
import css from "../Products/clothes-style.module.scss";
import Cloth from "./Cloth";

const titles = [
  "No",
  "Image",
  "Name",
  "Title",
  "Size",
  "Color",
  "Price",
  "Remained",
  "Total Price",
  "Action",
];

export const Clothes = () => {
  return (
    <div className={css.clothes_section}>
      <div className={css.clothes_section__titles}>
        {titles.map((el, idx) => (
          <h4 className={css.title} key={idx}>
            {el}
          </h4>
        ))}
      </div>
      <Cloth />
    </div>
  );
};

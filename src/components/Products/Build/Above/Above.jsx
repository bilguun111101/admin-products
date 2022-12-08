import React from "react";
import { useActive } from "../Context/Active";
import css from "../Products/above-style.module.scss";

export const Above = () => {
  const { setActiveBackground } = useActive();
  return (
    <div className={css.above_section}>
      <div className={css.add_section}>
        <div className={css.add_section__listing}>
          <p className={css.add_section__listing__title}>Product Listing</p>
          <div className={css.add_section__listing__all}>
            <p>All</p>
            <img
              src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/68aa923e88a71ac0a60c5b8abd5bc71411b70a12/frontend/src/assets/images/arrow-down-black.svg"
              alt="arrow down"
            />
          </div>
        </div>
        <button className={css.add_section__add_products} onClick={() => setActiveBackground(true)}>
          <p className={css.plus}>+</p>
          <p>Add Product</p>
        </button>
      </div>
    </div>
  );
};

import React from "react";
import css from "../Products/clothes-style.module.scss";

const Cloth = ({ data, number }) => {
  return (
    <div className={css.cloth_section}>
      <div className={css.cloth_section__primal}>
        <p className={css.number}>{number + 1}</p>
      </div>
      <div className={css.cloth_section__primal}>
        <img
          src="https://github.com/AmgalanAmga/mepo-af-project/blob/main/frontend/src/assets/images/mepo-image-men2.jpg?raw=true"
          alt=""
          className={css.cloth_section}
        />
      </div>
      <div className={css.cloth_section__primal}>
        <p>Winter Jacket</p>
      </div>
      <div className={css.cloth_section__primal}>
        <p>Undercover</p>
      </div>
      <div className={css.cloth_section__primal}>
        <p>XXL/M/L/S</p>
      </div>
      <ul className={css.cloth_section__primal__list}>
        <li>Black</li>
        <li>Green</li>
      </ul>
      <div className={css.cloth_section__primal}>
        <p>150.00 USD</p>
      </div>
      <div className={css.cloth_section__primal}>
        <p>3/7</p>
      </div>
      <div className={css.cloth_section__primal}>
        <button className={css.collection_btn}>Collection</button>
      </div>
      <div className={css.cloth_section__primal}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/176/176318.png"
          alt=""
          className={css.penIcon}
        />
      </div>
    </div>
  );
};

export default Cloth;

import React from "react";
import css from "../Products/clothes-style.module.scss";

const Cloth = () => {
  return (
    <div className={css.cloth_section}>
      <p className={css.number}>1</p>
      <img
        src="https://github.com/AmgalanAmga/mepo-af-project/blob/main/frontend/src/assets/images/mepo-image-men2.jpg?raw=true"
        alt=""
        className={css.cloth_section}
      />
      <p>Winter Jacket</p>
      <p>Undercover</p>
      <p>XXL/M/L/S</p>
      <ul>
        <li>Black</li>
        <li>Green</li>
      </ul>
      <p>150.00 USD</p>
      <p>3/7</p>
      <button>Collection</button>
      <img
        src="https://cdn-icons-png.flaticon.com/512/176/176318.png"
        alt=""
        className={css.penIcon}
      />
    </div>
  );
};

export default Cloth;

import React from "react";
import close from "./close.png";
import css from "../Products/enter-data.module.scss";

export const EnterData = () => {
  return (
    <div className={css.enter_data_section}>
      <div className={css.enter_data_section__container}>
        <button className={css.close_btn}>
          <img src={close} alt="close button" />
        </button>
        <div className={css.title_section}>
          <h1>ADD NEW PRODUCT</h1>
          <p>The First Image You Add Becomes The Main Image For This Product</p>
        </div>
        <div className={css.choose_language_section}>
          <button>EN</button>
          <button>MN</button>
        </div>
        <div className={css.enter_information_section}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Title" />
          <input
            type="text"
            placeholder="Description"
            className={css.description}
          />
          <button className={css.artist_section}>
            <p>Artist</p>
            <img
              src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/d04fb549c09e09d225dd9d671ee99d6d66a1c09d/frontend/src/assets/images/arrow-down-black.svg"
              alt="arrow down"
              //   className={}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

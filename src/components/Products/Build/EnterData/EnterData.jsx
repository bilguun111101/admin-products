import React from "react";
import clx from "classnames"
import close from "./close.png";
import { useState } from "react";
import DropDown from "./DropDown";
import css from "../Products/enter-data.module.scss";
import { useActive } from "../Context/Active";

export const EnterData = () => {
  const { setActiveBackground } = useActive();
  const [artist, setArtist] = useState(false);
  const [artistText, setArtistText] = useState();
  const dropdown = {
    active: artist,
    setActive: setArtist,
    setText: setArtistText,
  }
  return (
    <div className={css.enter_data_section}>
      <div className={css.enter_data_section__container}>
        <button className={css.close_btn} onClick={() => setActiveBackground(false)}>
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
          <button className={css.artist_section} onClick={() => setArtist(!artist)}>
            <p className={artistText && css.activeSelectText}>{ !artistText ? "Artist" : artistText }</p>
            <img
              src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/d04fb549c09e09d225dd9d671ee99d6d66a1c09d/frontend/src/assets/images/arrow-down-black.svg"
              alt="arrow down"
              className={clx(css.iconBtn, artist && css.activeBtn)}
            />
            <DropDown need={dropdown} />
          </button>
          <div className={css.default_gender}>
            <button className={css.gender_and_default}>
              <p className={artistText && css.activeSelectText}>{ !artistText ? "Default" : artistText }</p>
              <img
                src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/d04fb549c09e09d225dd9d671ee99d6d66a1c09d/frontend/src/assets/images/arrow-down-black.svg"
                alt="arrow down"
                className={clx(css.iconBtn, artist && css.activeBtn)}
              />
              <DropDown need={dropdown} />
            </button>
            <button className={css.gender_and_default}>
              <p className={artistText && css.activeSelectText}>{ !artistText ? "Gender" : artistText }</p>
              <img
                src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/d04fb549c09e09d225dd9d671ee99d6d66a1c09d/frontend/src/assets/images/arrow-down-black.svg"
                alt="arrow down"
                className={clx(css.iconBtn, artist && css.activeBtn)}
              />
              <DropDown need={dropdown} />
            </button>
          </div>
          <div className={css.default_gender}>
            <button className={css.gender_and_default}>
              <p className={artistText && css.activeSelectText}>{ !artistText ? "Size" : artistText }</p>
              <img
                src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/d04fb549c09e09d225dd9d671ee99d6d66a1c09d/frontend/src/assets/images/arrow-down-black.svg"
                alt="arrow down"
                className={clx(css.iconBtn, artist && css.activeBtn)}
              />
              <DropDown need={dropdown} />
            </button>
            <button className={css.gender_and_default}>
              <p className={artistText && css.activeSelectText}>{ !artistText ? "QTY" : artistText }</p>
              <img
                src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/d04fb549c09e09d225dd9d671ee99d6d66a1c09d/frontend/src/assets/images/arrow-down-black.svg"
                alt="arrow down"
                className={clx(css.iconBtn, artist && css.activeBtn)}
              />
              <DropDown need={dropdown} />
            </button>
          </div>
        </div>
        <div className={css.switch_btns}>
          <button>Back</button>
          <button>Next 1/2</button>
        </div>
      </div>
    </div>
  );
};

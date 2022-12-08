import React from "react";
import clx from "classnames";
import css from "../Products/drop-down.module.scss";

const data = ["XXL", "XL", "M"]

const DropDown = props => {
  const { active, setActive, setText } = props.need;
  const click_option = (text) => {
    setText(text);
    setActive(false);
  }
  return (
    <div className={clx(css.dropdown, active && css.active)}>
      { data.map((el, idx) => 
        (<div key={idx} className={css.dropdown__option} onClick={() => click_option(el)}>
          <p>{el}</p>
        </div>)) }
    </div>
  );
};

export default DropDown;

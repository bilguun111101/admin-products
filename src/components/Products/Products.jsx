import React from "react";
import { motion } from "framer-motion";
import { useActive } from "./Build/Context/Active";
import { Above, BlackBackground, Clothes } from "./Build";
import css from "./Build/Products/products-style.module.scss";

const Products = () => {
  const { activeBackground, setActiveBackground } = useActive();
  return (
    <>
      {activeBackground ? <BlackBackground /> : <></>}
      <motion.div
        className={css.products_section}
        initial={{
          opacity: 0,
          transitionDuration: "0.2s",
          x: -30,
          transition: { x: "1s", opacity: "1s" },
        }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className={css.products_section__container}>
          <Above />
          <Clothes />
        </div>
      </motion.div>
    </>
  );
};

export default Products;

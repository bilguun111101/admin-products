import React from "react";
import { motion } from "framer-motion";
import css from "../Products/black-background.module.scss";
import { useActive } from "../Context/Active";
import { EnterData } from "../EnterData/EnterData";

export const BlackBackground = () => {
  const { enterData, setEnterData } = useActive();
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className={css.black_background_section}
    >
      <EnterData />
    </motion.div>
  );
};

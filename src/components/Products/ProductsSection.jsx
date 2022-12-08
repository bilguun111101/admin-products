import React from "react";
import Products from "./Products";
import { ActiveProvider } from "./Build/Context/Active";

export const ProductsSection = () => {
  return (
    <ActiveProvider>
      <Products />
    </ActiveProvider>
  );
};

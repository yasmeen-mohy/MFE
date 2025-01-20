import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Marketing from "./components/Marketing";
import Header from "./components/Header";

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <StylesProvider createGenerateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header></Header>
          <Marketing />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

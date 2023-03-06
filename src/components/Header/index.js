import React from "react";
import CartBody from "./CartBody";
import TopBar from "./TopBar";
import LogoArea from "./LogoArea";
import Menu from "./Menu.jsx";

const Header = () => {
  return (
    <>
      <TopBar />
      <LogoArea />
      <CartBody />
      <Menu />
    </>
  );
};

export default Header;

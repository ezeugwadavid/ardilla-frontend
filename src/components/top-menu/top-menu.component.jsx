import React, { useState } from "react";
import { TopMenuContainer } from "./top-menu.styles";
import TopMenuDesktop from "../top-menu-desktop/top-menu-desktop.component";
import TopMenuMobile from "../top-menu-mobile/top-menu-mobile.component";

const TopMenu = () => {

  return (
    <TopMenuContainer>
      <div className="desktop">
        <TopMenuDesktop />
      </div>
      <div className="mobile">
        <TopMenuMobile />
      </div>
    </TopMenuContainer>
  );
};

export default TopMenu;

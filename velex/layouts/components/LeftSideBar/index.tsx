"use client";

import { Icon } from "@iconify/react";
import { Button } from "react-bootstrap";
import SimpleBar from "simplebar-react";

import { getMenuItems } from "@/helpers/menu";
import AppMenu from "@/layouts/components/LeftSideBar/components/AppMenu";
import LogoBox from "@/components/LogoBox";
import { useLayoutContext } from "@/context/useLayoutContext";

const LeftSideBar = () => {          
  const menuItems = getMenuItems();

  const { mainMenu, changeMainMenuSize } = useLayoutContext();

  const toggleMainMenu = () => {
    if (mainMenu.size === "sm-hover-active") {
      return changeMainMenuSize("sm-hover");
    }
    return changeMainMenuSize("sm-hover-active");
  };

  return (
    <div className="main-nav">
      <LogoBox />
      <Button
        onClick={toggleMainMenu}
        type="button"
        className="button-sm-hover"
        aria-label="Show Full Sidebar"
      >
        <Icon
          icon="solar:hamburger-menu-line-duotone"
          className="button-sm-hover-icon"
        />
      </Button>
      <SimpleBar className="scrollbar" data-simplebar>
        <AppMenu menuItems={menuItems} />
      </SimpleBar>
    </div>
  );
};

export default LeftSideBar;

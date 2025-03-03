"use client";

import { Icon } from "@iconify/react";
import { Button } from "react-bootstrap";
import SimpleBar from "simplebar-react";

import { getMenuItems } from "@/helpers/Menu";
import AppMenu from "@/layouts/components/LeftSideBar/components/AppMenu";
import LogoBox from "@/components/LogoBox";

const LeftSideBar = () => {
  const menuItems = getMenuItems();
  return (
    <div className="main-nav">
      <LogoBox />
      <Button
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

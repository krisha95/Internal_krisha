"use client";

import React, { useCallback, useEffect } from "react";
import { Icon } from "@iconify/react";
import SearchBar from "./components/SearchBar";
import Activity from "./components/Activity";
import NotificationDropdown from "./components/NotificationDropdown";
import Setting from "./components/Setting";
import UserProfile from "./components/UserProfile";
import Theme from "./components/Theme";
import { useLayoutContext } from "@/context/useLayoutContext";
import { debounce } from "lodash";
import useViewPort from "@/hooks/useViewPort";

const TopBar = () => {
  const { mainMenu, changeMainMenuSize, toggleMobileMenu } = useLayoutContext();
  const { width } = useViewPort();

  const resize = useCallback(
    debounce(() => {
      if (width <= 1020) {
        changeMainMenuSize("hidden");
      } else {
        changeMainMenuSize("default");
      }
    }, 200),
    [width]
  );

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  const toggleMainMenu = () => {
    if (mainMenu.size === "hidden") {
      return toggleMobileMenu(!mainMenu.isMobileMenuOpen);
    } else if (mainMenu.size === "default") {
      return changeMainMenuSize("condensed");
    }
    return changeMainMenuSize("default");
  };

  return (
    <>
      <header className="topbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="d-flex align-items-center">
              <div className="topbar-item">
                <button
                  onClick={toggleMainMenu}
                  type="button"
                  className="button-toggle-menu me-2"
                >
                  <Icon
                    icon="solar:hamburger-menu-broken"
                    className="fs-24 align-middle"
                  ></Icon>
                </button>
              </div>

              <div className="topbar-item">
                <h4 className="fw-bold topbar-button pe-none mb-0">
                  Hi! Gaston 👋
                </h4>
              </div>
            </div>
            <div className="d-flex align-items-center gap-1">
              <SearchBar />
              <Theme />
              <NotificationDropdown />
              <Setting />
              <Activity />
              <UserProfile />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;

"use client";
import { ReactNode } from "react";

import LeftSideBar from "./components/LeftSideBar";
import TopBar from "./components/TopBar";
import { useLayoutContext } from "@/context/useLayoutContext";
import { Offcanvas } from "react-bootstrap";

const VerticalLayout = ({ children }: { children: ReactNode }) => {
  const { theme, mainMenu, toggleMobileMenu } = useLayoutContext();

  return (
    <>
      <div className="wrapper">
        <TopBar />

        {mainMenu.size === "hidden" ? (
          <>
            <Offcanvas
              show={mainMenu.isMobileMenuOpen}
              onHide={() => toggleMobileMenu(!mainMenu.isMobileMenuOpen)}
            >
              <LeftSideBar />
            </Offcanvas>
          </>
        ) : (
          <LeftSideBar />
        )}

        <div className="page-content">
          {/* <button onClick={toggleTheme}>{theme}</button> */}
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </>
  );
};

export default VerticalLayout;

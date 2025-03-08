"use client";
import { ReactNode } from "react";

import LeftSideBar from "./components/LeftSideBar";
import TopBar from "./components/TopBar";
import { useLayoutContext } from "@/context/useLayoutContext";
import { Offcanvas } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import SimpleBar from "simplebar-react";

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
          <div className="container-fluid">
              {children}
            {/* <SimpleBar className="scrollbar">
              </SimpleBar> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default VerticalLayout;

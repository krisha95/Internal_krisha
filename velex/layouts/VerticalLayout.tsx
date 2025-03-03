"use client";
import { ReactNode } from "react";

import LeftSideBar from "./components/LeftSideBar";
import TopBar from "./components/TopBar";
// import { useLayoutContext } from "@/context/useLayoutContext";

const VerticalLayout = ({ children }: { children: ReactNode }) => {
  // const { theme, changeTheme } = useLayoutContext();

  // const toggleTheme = () => {
  //   if (theme == "dark") {
  //     changeTheme("light");
  //     return;
  //   }
  //   changeTheme("dark");
  //   return;
  // };

  return (
    <>
      <div className="wrapper">
        <TopBar />
        <LeftSideBar />

        <div className="page-content">
          {/* <button onClick={toggleTheme}>{theme}</button> */}
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </>
  );
};

export default VerticalLayout;

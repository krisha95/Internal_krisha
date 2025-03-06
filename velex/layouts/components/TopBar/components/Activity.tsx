"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect } from "react";
import RightSidebar from "../../RightSideBar/RigthSideBar";
import { useLayoutContext } from "@/context/useLayoutContext";

const Activity = () => {
  const { activitySidebar } = useLayoutContext();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1020 && activitySidebar.open) {
        activitySidebar.toggle();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activitySidebar]);

  const handleToggle = () => {
    activitySidebar.toggle();
  };

  return (
    <>
      <div className="topbar-item">
        <button
          type="button"
          className="topbar-button rightbar-toggle-button"
          onClick={handleToggle}
        >
          <Icon
            icon="solar:clock-circle-outline"
            className="fs-24 align-middle"
          />
        </button>
      </div>

      <RightSidebar
        show={activitySidebar.open}
        setShow={activitySidebar.toggle}
      />
    </>
  );
};

export default Activity;

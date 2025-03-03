import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";


const Activity = () => {
  return (
    <div className="topbar-item">
      <button
        type="button"
        className="topbar-button rightbar-toggle-button"
        data-bs-toggle="offcanvas"
        data-bs-target="#rightbar-offcanvas"
        aria-controls="theme-settings-offcanvas"
      >
        <Icon
          icon="solar:clock-circle-outline"
          className="fs-24 align-middle"
        ></Icon>
      </button>
    </div>


  );
};

export default Activity;

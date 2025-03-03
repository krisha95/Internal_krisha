import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Setting = () => {
  return (
    <div>
      <div className="topbar-item d-none d-md-flex">
        <button
          type="button"
          className="topbar-button"
          id="theme-settings-btn"
          data-bs-toggle="offcanvas"
          data-bs-target="#theme-settings-offcanvas"
          aria-controls="theme-settings-offcanvas"
        >
          <Icon
            icon="solar:settings-outline"
            className="fs-24 align-middle"
          ></Icon>
        </button>
      </div>
    </div>
  );
};

export default Setting;

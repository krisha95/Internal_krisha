import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ThemeSettings from "../../ThemeSettings/indext";
import { useLayoutContext } from "@/context/useLayoutContext";

const Setting: React.FC = () => {
  const { themeCustomizer } = useLayoutContext();

  return (
    <div>
      <div className="topbar-item d-none d-md-flex">
        <button
          type="button"
          className="topbar-button"
          id="theme-settings-btn"
          onClick={themeCustomizer.toggle}
        >
          <Icon icon="solar:settings-outline" className="fs-24 align-middle" />
        </button>
      </div>
      <ThemeSettings
        show={themeCustomizer.open}
        handleClose={themeCustomizer.toggle}
      />
    </div>
  );
};

export default Setting;

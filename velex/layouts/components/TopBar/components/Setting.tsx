import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ThemeSettings from "../../ThemeSetting/indext";

const Setting: React.FC = () => {
  const [showThemeSettings, setShowThemeSettings] = useState(false);

  return (
    <div>
      <div className="topbar-item d-none d-md-flex">
        <button
          type="button"
          className="topbar-button"
          id="theme-settings-btn"
          onClick={() => setShowThemeSettings(true)}
        >
          <Icon icon="solar:settings-outline" className="fs-24 align-middle" />
        </button>
      </div>
      <ThemeSettings
        show={showThemeSettings}
        handleClose={() => setShowThemeSettings(false)}
      />
    </div>
  );
};

export default Setting;

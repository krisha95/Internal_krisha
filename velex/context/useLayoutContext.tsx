"use client";

import { toggleDocumentAttribute } from "@/helpers/layout";
import { ChildrenType } from "@/types";
import {
  LayoutOffcanvasStatesType,
  LayoutState,
  LayoutType,
  MainMenuType,
  OffcanvasControlType,
  ThemeType,
  TopBarType,
} from "@/types/layout";
import React, {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocalStorage } from "usehooks-ts";

const INIT_STATE: LayoutState = {
  theme: "light",
  mainMenu: {
    size: "default",
    color: "dark",
    isMobileMenuOpen: false,
  },
  topBar: {
    color: "light",
  },
};

const ThemeContext = createContext<LayoutType | undefined>(undefined);

const useLayoutContext = () => {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error("useLayoutContext can only be used within LayoutProvider");
  }
  return context;
};

const LayoutProvider = ({ children }: ChildrenType) => {
  const [settings, setSettings] = useLocalStorage<LayoutState>(
    "__VELEX_NEXT_CONFIG__",
    INIT_STATE
  );

  const [offcanvasStates, setOffcanvasStates] =
    useState<LayoutOffcanvasStatesType>({
      showThemeCustomizer: false,
      showActivitySidebar: true,
    });

  // update settings
  const updateSettings = useCallback(
    (_newSettings: Partial<LayoutState>) => {
      setSettings((prevSettings) => ({
        ...prevSettings,
        ..._newSettings,
        mainMenu: {
          ...prevSettings.mainMenu,
          ...(_newSettings.mainMenu || {}),
        },
        topBar: {
          ...prevSettings.topBar,
          ...(_newSettings.topBar || {}),
        },
      }));
    },
    [setSettings]
  );

  const changeTheme = (nTheme: ThemeType) => {
    updateSettings({ theme: nTheme });
    toggleDocumentAttribute("data-bs-theme", nTheme);
  };

  const changeMainMenuSize = useCallback(
    (nSize: MainMenuType["size"]) => {
      updateSettings({ mainMenu: { ...settings.mainMenu, size: nSize } });
      toggleDocumentAttribute("data-menu-size", nSize);
    },
    [updateSettings]
  );

  const changeMainMenuColor = useCallback(
    (nColor: MainMenuType["color"]) => {
      updateSettings({ mainMenu: { ...settings.mainMenu, color: nColor } });
      toggleDocumentAttribute("data-menu-color", nColor);
    },
    [updateSettings]
  );

  const changeTopBarColor = useCallback(
    (nColor: TopBarType["color"]) => {
      updateSettings({ topBar: { color: nColor } });
      toggleDocumentAttribute("data-topbar-color", nColor);
    },
    [updateSettings]
  );

  const toggleMobileMenu = (nValue: MainMenuType["isMobileMenuOpen"]) => {
    updateSettings({
      mainMenu: { ...settings.mainMenu, isMobileMenuOpen: nValue },
    });
  };

  const toggleThemeCustomizer: OffcanvasControlType["toggle"] = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showThemeCustomizer: !offcanvasStates.showThemeCustomizer,
    });
  };

  const themeCustomizer: LayoutType["themeCustomizer"] = {
    open: offcanvasStates.showThemeCustomizer,
    toggle: toggleThemeCustomizer,
  };

  const toggleActivitySidebar: OffcanvasControlType["toggle"] = () => {
    offcanvasStates.showActivitySidebar
      ? toggleDocumentAttribute("class", "rightbar-toggle")
      : toggleDocumentAttribute("class", "rightbar-toggle", true);

    setOffcanvasStates({
      ...offcanvasStates,
      showActivitySidebar: !offcanvasStates.showActivitySidebar,
    });
  };

  const activitySidebar: LayoutType["activitySidebar"] = {
    open: offcanvasStates.showActivitySidebar,
    toggle: toggleActivitySidebar,
  };

  const resetSettings = () => updateSettings(INIT_STATE);

  useEffect(() => {
    toggleDocumentAttribute("data-bs-theme", settings.theme);
    toggleDocumentAttribute("data-menu-size", settings.mainMenu.size);
    toggleDocumentAttribute("data-menu-color", settings.mainMenu.color);
    toggleDocumentAttribute("data-topbar-color", settings.topBar.color);

    // if (!activitySidebar.open) {
    //   toggleDocumentAttribute("class", "rightbar-toggle");
    // }

    return () => {
      toggleDocumentAttribute("data-bs-theme", settings.theme, true);
      toggleDocumentAttribute("data-menu-size", settings.mainMenu.size, true);
      toggleDocumentAttribute("data-menu-color", settings.mainMenu.color, true);
      toggleDocumentAttribute("data-topbar-color", settings.topBar.color, true);
      // toggleDocumentAttribute("class", "rightbar-toggle", true);
    };
  }, [settings]);

  return (
    <ThemeContext.Provider
      value={useMemo(
        () => ({
          ...settings,
          settings,
          themeCustomizer,
          activitySidebar,
          changeTheme,
          changeMainMenuSize,
          changeMainMenuColor,
          changeTopBarColor,
          toggleMobileMenu,
          resetSettings,
        }),
        [settings, offcanvasStates]
      )}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export { LayoutProvider, useLayoutContext };

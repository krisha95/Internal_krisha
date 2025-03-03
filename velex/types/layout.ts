import { IconType } from "react-icons";

export type ThemeType = "light" | "dark";

export type MainMenuType = {
  size: "default" | "sm-hover-active" | "condensed" | "hidden" | "sm-hover";
  color: "light" | "dark";
  isMobileMenuOpen: boolean;
};

export type TopBarType = {
  color: "light" | "dark";
};

export type LayoutState = {
  theme: ThemeType;
  mainMenu: MainMenuType;
  topBar: TopBarType;
};

export type LayoutOffcanvasStatesType = {
  showThemeCustomizer: boolean;
};

export type OffcanvasControlType = {
  open: boolean;
  toggle: () => void;
};

export type LayoutType = LayoutState & {
  settings: LayoutState;
  changeTheme: (theme: ThemeType) => void;
  changeMainMenuSize: (size: MainMenuType["size"]) => void;
  changeMainMenuColor: (color: MainMenuType["color"]) => void;
  changeTopBarColor: (color: TopBarType["color"]) => void;

  toggleMobileMenu: (
    isMobileMenuOpen: MainMenuType["isMobileMenuOpen"]
  ) => void;
  themeCustomizer: OffcanvasControlType;
  resetSettings: () => void;
};

export type MenuItemType = {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: IconType;
  url?: string;
  badge?: {
    variant: string;
    text: string;
    icon?: IconType;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemType[];
};

export type SocialLinkType = {
  label: string;
  icon: IconType;

  url: string;
};


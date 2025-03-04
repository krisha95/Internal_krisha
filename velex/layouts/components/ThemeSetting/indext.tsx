"use client";
import { useLayoutContext } from "@/context/useLayoutContext";
import { kebabToTitleCase, toSentenceCase } from "@/helpers/casing";
import { ThemeType, MainMenuType } from "@/types/layout";
import React from "react";
import { Offcanvas, Button, Form } from "react-bootstrap";

interface ThemeSettingsProps {
  show: boolean;
  handleClose: () => void;
}

const LayoutColors: ThemeType[] = ["light", "dark"];
const SidebarSizes: MainMenuType["size"][] = [
  "default",
  "sm-hover-active",
  "condensed",
  "hidden",
  "sm-hover",
];

const ThemeSettings: React.FC<ThemeSettingsProps> = ({ show, handleClose }) => {
  const {
    theme,
    mainMenu,
    topBar,
    changeTheme,
    changeMainMenuColor,
    changeMainMenuSize,
    changeTopBarColor,
    resetSettings,
  } = useLayoutContext();

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="border-0"
    >
      <Offcanvas.Header closeButton className="bg-primary p-3">
        <Offcanvas.Title className="text-white m-0">
          Theme Settings
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <div className="p-3 settings-bar">
          <div>
            <h5 className="mb-3 fw-semibold">Color Scheme</h5>
            {LayoutColors.map((item, idx) => (
              <Form.Check
                key={item}
                type="radio"
                name="theme"
                label={toSentenceCase(item)}
                value={item}
                checked={theme === item}
                onChange={() => changeTheme(item)}
                className={idx !== LayoutColors.length - 1 ? "mb-2" : ""}
              />
            ))}
          </div>

          <div>
            <h5 className="my-3 fw-semibold">Topbar Color</h5>
            {LayoutColors.map((item, idx) => (
              <Form.Check
                key={item}
                type="radio"
                name="topbarColor"
                label={toSentenceCase(item)}
                value={item}
                checked={topBar.color === item}
                onChange={() => changeTopBarColor(item)}
                className={idx !== LayoutColors.length - 1 ? "mb-2" : ""}
              />
            ))}
          </div>

          <div>
            <h5 className="my-3 fw-semibold">Menu Color</h5>
            {LayoutColors.map((item, idx) => (
              <Form.Check
                key={item}
                type="radio"
                name="menuColor"
                label={toSentenceCase(item)}
                value={item}
                checked={mainMenu.color === item}
                onChange={() => changeMainMenuColor(item)}
                className={idx !== LayoutColors.length - 1 ? "mb-2" : ""}
              />
            ))}
          </div>

          <div>
            <h5 className="my-3 fw-semibold">Sidebar Size</h5>
            {SidebarSizes.map((size) => (
              <Form.Check
                key={size}
                type="radio"
                name="mensize"
                label={kebabToTitleCase(size)}
                value={size}
                checked={mainMenu.size === size}
                onChange={() => changeMainMenuSize(size)}
                className="mb-2"
              />
            ))}
          </div>
        </div>
      </Offcanvas.Body>
      <div className="border-top p-3 text-center">
        <Button
          variant="danger"
          className="w-100"
          id="reset-layout"
          onClick={resetSettings}
        >
          Reset
        </Button>
      </div>
    </Offcanvas>
  );
};

export default ThemeSettings;

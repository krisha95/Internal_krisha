"use client";

import React from "react";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <footer className="footer py-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            {new Date().getFullYear()} &copy; Velex. Crafted by{" "}
            <Icon
              icon="iconamoon:heart-duotone"
              className="fs-18 align-middle text-danger"
            />{" "}
            <a href="#" className="fw-bold footer-text" target="_blank">
              Techzaa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

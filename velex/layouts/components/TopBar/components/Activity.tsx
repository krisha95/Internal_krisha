import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import RightSidebar from "../../RightSideBar/RigthSideBar";

const Activity = () => {
  const [show, setShow] = useState(true);

  const handleToggle = () => setShow((prev) => !prev);

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

      <RightSidebar show={show} setShow={setShow} />
    </>
  );
};

export default Activity;

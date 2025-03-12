import React from "react";
import { BiArchive } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
import { Tooltip, OverlayTrigger, Dropdown } from "react-bootstrap";

const EmailHeader = () => {
  return (
    <div className="p-3">
      <div className="d-flex flex-wrap gap-2">
        <button
          className="btn btn-light d-xxl-none d-flex align-items-center px-2 me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#EmailSidebaroffcanvas"
          aria-controls="EmailSidebaroffcanvas"
        >
          <i className="bx bx-menu fs-18" />
        </button>

        <div className="btn-group">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="archive-tooltip">Archive</Tooltip>}
          >
            <button type="button" className="btn btn-light">
              <BiArchive className="fs-18" />
            </button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="spam-tooltip">Mark as Spam</Tooltip>}
          >
            <button type="button" className="btn btn-light">
              <GrStatusInfo className="fs-18" />
            </button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}
          >
            <button type="button" className="btn btn-light">
              <FaRegTrashAlt className="fs-18" />
            </button>
          </OverlayTrigger>
        </div>

        <div className="btn-group">
          {/* <Dropdown>
            <Dropdown.Toggle variant="light" id="folder-dropdown">
              <IoMdFolderOpen className="fs-18" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Social</Dropdown.Item>
              <Dropdown.Item href="#">Promotions</Dropdown.Item>
              <Dropdown.Item href="#">Updates</Dropdown.Item>
              <Dropdown.Item href="#">Forums</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>

        <div className="btn-group">
          {/* <Dropdown>
            <Dropdown.Toggle variant="light" id="labels-dropdown">
              <PiBookmarksSimpleThin className="fs-18" />
              abc
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Updates</Dropdown.Item>
              <Dropdown.Item href="#">Social</Dropdown.Item>
              <Dropdown.Item href="#">Promotions</Dropdown.Item>
              <Dropdown.Item href="#">Forums</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>

        <div className="btn-group">
          {/* <Dropdown>
            <Dropdown.Toggle variant="light" id="more-actions-dropdown">
              More
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Mark as Unread</Dropdown.Item>
              <Dropdown.Item href="#">Add to Tasks</Dropdown.Item>
              <Dropdown.Item href="#">Add Star</Dropdown.Item>
              <Dropdown.Item href="#">Mute</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>
      </div>
    </div>
  );
};

export default EmailHeader;

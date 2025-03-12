"use client";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import {
  BiSend,
  BiSolidCircle,
  BiSolidFileDoc,
  BiSolidInbox,
  BiStar,
  BiTag,
  BiTrash,
} from "react-icons/bi";
import ComposeMail from "./ComposeMail";

const EmailSideBar = ({
  onTabChange,
}: {
  onTabChange: (tab: string) => void;
}) => {
  const [usedStorage, setUsedStorage] = useState<number>(7.02);
  const totalStorage = 15;
  const [progress, setProgress] = useState<number>(0);
  const [showComposeModal, setShowComposeModal] = useState<boolean>(false);

  useEffect(() => {
    const progressPercentage = (usedStorage / totalStorage) * 100;
    setProgress(progressPercentage);
  }, [usedStorage]);

  const handleTabClick = (tab: string) => {
    onTabChange(tab);
  };
  const handleComposeClick = () => {
    setShowComposeModal(true);
  };

  return (
    <Col xxl={2}>
      <div
        className="offcanvas-xxl offcanvas-start h-100"
        tabIndex={-1}
        id="EmailSidebaroffcanvas"
        aria-labelledby="EmailSidebaroffcanvasLabel"
      >
        <div className="card h-100 mb-0" data-simplebar="">
          <div className="card-body">
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#compose-modal"
                onClick={handleComposeClick}
              >
                Compose
              </button>
            </div>

            <div
              className="nav flex-column mt-3"
              id="email-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link px-0 py-1 active show"
                id="email-inbox-tab"
                data-bs-toggle="pill"
                href="#email-inbox"
                role="tab"
                aria-controls="email-inbox"
                aria-selected="true"
                onClick={() => handleTabClick("email-inbox")}
              >
                <span className="text-danger fw-bold">
                  <BiSolidInbox className="fs-16 me-2 align-middle" />
                  Inbox
                  <span className="badge badge-soft-danger float-end ms-2">
                    7
                  </span>
                </span>
              </a>

              <a
                className="nav-link px-0 py-1"
                id="email-starred-tab"
                data-bs-toggle="pill"
                href="#email-starred"
                role="tab"
                aria-controls="email-starred"
                aria-selected="false"
                onClick={() => handleTabClick("email-starred")}
              >
                <BiStar className="bx bx-star fs-16 align-middle me-2" />
                Starred
              </a>

              <a
                className="nav-link px-0 py-1"
                id="email-draft-tab"
                data-bs-toggle="pill"
                href="#email-draft"
                role="tab"
                aria-controls="email-draft"
                aria-selected="false"
                onClick={() => handleTabClick("email-draft")}
              >
                <BiSolidFileDoc className=" fs-16 align-middle me-2" />
                Draft
                <span className="badge badge-soft-info float-end ms-2">32</span>
              </a>

              <a
                className="nav-link px-0 py-1"
                id="email-sent-tab"
                data-bs-toggle="pill"
                href="#email-sent"
                role="tab"
                aria-controls="email-sent"
                aria-selected="false"
                onClick={() => handleTabClick("email-sent")}
              >
                <BiSend className="bx bx-send fs-16 align-middle me-2" />
                Sent Mail
              </a>

              <a
                className="nav-link px-0 py-1"
                id="email-trash-tab"
                data-bs-toggle="pill"
                href="#email-trash"
                role="tab"
                aria-controls="email-trash"
                aria-selected="false"
                onClick={() => handleTabClick("email-trash")}
              >
                <BiTrash className="bx bx-trash fs-16 align-middle me-2" />
                Trash Mail
              </a>

              <a
                className="nav-link px-0 py-1"
                id="email-important-tab"
                data-bs-toggle="pill"
                href="#email-important"
                role="tab"
                aria-controls="email-important"
                aria-selected="false"
                onClick={() => handleTabClick("email-important")}
              >
                <BiTag className="fs-16 align-middle me-2" />
                Important
              </a>

              <h6 className="text-uppercase mt-4">Labels</h6>

              <a
                className="nav-link px-0 py-1"
                id="email-updates-tab"
                data-bs-toggle="pill"
                href="#email-updates"
                role="tab"
                aria-controls="email-updates"
                aria-selected="false"
                onClick={() => handleTabClick("email-updates")}
              >
                <BiSolidCircle className="font-13 text-info me-2" />
                Updates
              </a>

              <a
                className="nav-link px-0 py-1"
                id="email-social-tab"
                data-bs-toggle="pill"
                href="#email-social"
                role="tab"
                aria-controls="email-social"
                aria-selected="false"
                onClick={() => handleTabClick("email-social")}
              >
                <BiSolidCircle className="font-13 text-primary me-2" />
                Social
              </a>

              <a
                className="nav-link px-0 py-1"
                id="email-promotion-tab"
                data-bs-toggle="pill"
                href="#email-promotion"
                role="tab"
                aria-controls="email-promotion"
                aria-selected="false"
                onClick={() => handleTabClick("email-promotion")}
              >
                <BiSolidCircle className="font-13 text-secondary me-2" />
                Social Promotions
              </a>

              <a
                className="nav-link px-0 py-1"
                id="email-forums-tab"
                data-bs-toggle="pill"
                href="#email-forums"
                role="tab"
                aria-controls="email-forums"
                aria-selected="true"
                onClick={() => handleTabClick("email-forums")}
              >
                <BiSolidCircle className="font-13 text-success me-2" />
                Forums
              </a>
            </div>

            <div className="mt-5">
              <h4>
                <span className="badge rounded-pill p-1 px-2 badge-soft-secondary">
                  FREE
                </span>
              </h4>
              <h6 className="text-uppercase mt-3">Storage</h6>
              <div className="progress my-2 progress-sm">
                <div
                  className="progress-bar progress-lg bg-success"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-muted font-13 mb-0">
                {usedStorage.toFixed(2)} GB ({Math.round(progress)}%) of{" "}
                {totalStorage} GB used
              </p>
            </div>
          </div>
        </div>
      </div>
      <ComposeMail
        show={showComposeModal}
        onHide={() => setShowComposeModal(false)}
      />
    </Col>
  );
};

export default EmailSideBar;

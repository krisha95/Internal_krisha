"use client";

import { Offcanvas } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import { Icon } from "@iconify/react";
import rightbarImage from "@/assets/images/rightbar.png";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import img6 from "@/assets/images/small/img-6.jpg";
import image3 from "@/assets/images/small/img-3.jpg";
import image4 from "@/assets/images/small/img-4.jpg";

const RightSidebar: React.FC<RightSidebarProps> = ({ show, setShow }) => {
  return (
    <Offcanvas
      backdrop={false}
      show={show}
      onHide={() => setShow(false)}
      placement="end"
    >
      <SimpleBar style={{ height: "100vh" }}>
        <div className="card rounded-0">
          <img
            src={rightbarImage.src}
            className="img-fluid"
            alt="rightbarImage"
          />

          <div className="p-3">
            <h5 className="mb-3 text-muted fw-bold text-uppercase">
              Activity Stream
            </h5>
            <div className="position-relative ms-2">
              <div className="position-relative ps-3">
                <div className="mb-4">
                  <span className="position-absolute start-0 avatar-xs text-bg-danger d-inline-flex align-items-center justify-content-center rounded-circle fs-16">
                    <Icon icon="iconamoon:folder-check-duotone" />
                  </span>
                  <div className="ms-2">
                    <h5 className="mb-1 text-dark fw-semibold">
                      Report-Fix / Update
                    </h5>
                    <p className="d-flex align-items-center">
                      Add 3 files to
                      <span className="text-primary ms-1">
                        <Icon icon="iconamoon:file-light" /> Tasks
                      </span>
                    </p>
                    <h6 className="mt-2 text-muted">Monday, 4:24 PM</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="position-relative ps-3">
              <div className="mb-4">
                <span className="position-absolute start-0 avatar-xs text-bg-success d-inline-flex align-items-center justify-content-center rounded-circle fs-16">
                  <Icon icon="iconamoon:check-circle-1-duotone" />
                </span>
                <div className="ms-2">
                  <h5 className="mb-1 text-dark fw-semibold">Project Status</h5>
                  <p className="d-flex align-items-center mb-0">
                    Marked{" "}
                    <span className="text-primary mx-1">
                      <Icon icon="iconamoon:file-light" /> Design
                    </span>
                    as{" "}
                    <span className="badge bg-success-subtle text-success px-2 py-1 ms-1">
                      Completed
                    </span>
                  </p>
                  <h6 className="mt-2 text-muted">Monday, 3:00 PM</h6>
                </div>
              </div>
            </div>

            <div className="position-relative ps-3">
              <div className="mb-4">
                <span className="position-absolute start-0 avatar-xs text-bg-success d-inline-flex align-items-center justify-content-center rounded-circle fs-14">
                  UI
                </span>
                <div className="ms-2">
                  <h5 className="mb-1 text-dark fw-semibold">
                    Application UI v2.0.0{" "}
                    <span className="badge bg-primary-subtle text-primary px-2 py-1 ms-1">
                      Latest
                    </span>
                  </h5>
                  <p>
                    Get access to over 20+ pages including a dashboard layout,
                    charts, kanban board, calendar, and more.
                  </p>
                  <div className="mt-2">
                    <button className="btn btn-outline-secondary rounded-pill btn-sm">
                      Download File
                    </button>
                  </div>
                  <h6 className="mt-2 text-muted">Monday, 2:10 PM</h6>
                </div>
              </div>
            </div>

            <div className="position-relative ps-3">
              <div className="mb-4">
                <span className="position-absolute start-0 bg-success rounded-circle text-light fs-16">
                  <img
                    src={avatar7.src}
                    alt="avatar"
                    className="avatar-xs rounded-circle"
                  />
                </span>
                <div className="ms-2">
                  <h5 className="mb-0 text-dark fw-semibold">
                    Alex Smith Attached Photos
                  </h5>
                  <div className="row g-2 mt-1">
                    <div className="col-lg-4">
                      <img
                        src={img6.src}
                        alt="img6"
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-lg-4">
                      <img
                        src={image3.src}
                        alt=""
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-lg-4">
                      <img
                        src={image4.src}
                        alt=""
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <h6 className="mt-2 text-muted">Monday 1:00 PM</h6>
                </div>
              </div>
            </div>
            <div className="position-relative ps-4">
              <div className="mb-4">
                <span className="position-absolute start-0 avatar-xs text-bg-warning d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-16">
                  <Icon icon="iconamoon:certificate-badge-duotone" />
                </span>
                <div className="ms-2">
                  <h5 className="mb-0 text-dark fw-semibold">Achievements</h5>
                  <p className="d-flex align-items-center gap-1 mt-1">
                    <Icon
                      icon="iconamoon:certificate-badge-duotone"
                      className="text-danger fs-20"
                    />
                    "Best Product Award"
                  </p>
                  <h6 className="mt-2 text-muted">Monday 9:30 AM</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SimpleBar>
    </Offcanvas>
  );
};

export default RightSidebar;

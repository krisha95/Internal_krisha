"use client";

import { Offcanvas } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import { Icon } from "@iconify/react";
import rightbarImage from "@/assets/images/rightbar.png";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import img6 from "@/assets/images/small/img-6.jpg";
import image3 from "@/assets/images/small/img-3.jpg";
import image4 from "@/assets/images/small/img-4.jpg";
import { useEffect, useState } from "react";

const RightSidebar: React.FC<RightSidebarProps> = ({ show, setShow }) => {
  const [backdrop, setBackdrop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setBackdrop(window.innerWidth <= 1020);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Offcanvas
      backdrop={backdrop}
      show={show}
      onHide={() => setShow(false)}
      placement="end"
      className="rightbar"
    >
      <SimpleBar style={{ height: "100vh" }}>
        <div>
          <img src={rightbarImage.src} className="img-fluid" alt="" />
        </div>
        <div className="p-3">
          <h5 className="mb-3 fs-12 text-muted fw-bold text-uppercase">
            Activity Stream
          </h5>

          <div className="position-relative ms-2">
            <span className="position-absolute start-0 top-0 border border-dashed h-100"></span>
            <div className="position-relative ps-3">
              <div className="mb-4">
                <span className="position-absolute start-0 avatar-xs translate-middle-x text-bg-danger d-inline-flex align-items-center justify-content-center rounded-circle fs-16">
                  <Icon icon="iconamoon:folder-check-duotone"></Icon>
                </span>
                <div className="ms-2">
                  <h5 className="mb-1 text-dark fw-semibold fs-14 lh-base">
                    Report-Fix / Update
                  </h5>
                  <p className="d-flex align-items-center">
                    Add 3 files to
                    <span className="d-flex align-items-center text-primary ms-1">
                      <Icon icon="iconamoon:file-light"></Icon>
                      Tasks
                    </span>
                  </p>
                  <div className="bg-secondary-subtle rounded-2 p-1">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center gap-2">
                          <i className="bx bxl-figma fs-20 text-red"></i>
                          <a href="#!" className="text-dark fw-medium">
                            Concept.fig
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="mt-2 text-muted">Monday , 4:24 PM</h6>
                </div>
              </div>
            </div>

            <div className="position-relative ps-3">
              <div className="mb-4">
                <span className="position-absolute start-0 avatar-xs translate-middle-x text-bg-success d-inline-flex align-items-center justify-content-center rounded-circle fs-16">
                  <Icon icon="iconamoon:check-circle-1-duotone"></Icon>
                </span>
                <div className="ms-2">
                  <h5 className="mb-1 text-dark fw-semibold fs-14 lh-base">
                    Project Status
                  </h5>
                  <p className="d-flex align-items-center mb-0">
                    Marked
                    <span className="d-flex align-items-center text-primary mx-1">
                      <Icon icon="iconamoon:file-light"></Icon>
                      Design
                    </span>
                    as
                    <span className="badge bg-success-subtle text-success px-2 py-1 ms-1">
                      Completed
                    </span>
                  </p>
                  <div className="d-flex align-items-center gap-3 mt-1 bg-secondary-subtle p-1 rounded-2 px-2">
                    <a href="#!" className="fw-medium text-dark">
                      UI/UX Figma Design
                    </a>
                  </div>
                  <h6 className="mt-2 text-muted">Monday , 3:00 PM</h6>
                </div>
              </div>
            </div>
            <div className="position-relative ps-3">
              <div className="mb-4">
                <span className="position-absolute start-0 avatar-xs translate-middle-x text-bg-success d-inline-flex align-items-center justify-content-center rounded-circle fs-14">
                  UI
                </span>
                <div className="ms-2">
                  <h5 className="mb-1 text-dark fw-semibold fs-14">
                    Application UI v2.0.0
                    <span className="badge bg-primary-subtle text-primary px-2 py-1 ms-1">
                      Latest
                    </span>
                  </h5>
                  <p>
                    Get access to over 20+ pages including a dashboard layout,
                    charts, kanban board, calendar, and pre-order E-commerce &
                    Marketing p image : ages.
                  </p>
                  <div className="mt-2">
                    <a
                      href="#!"
                      className="btn btn-outline-secondary rounded-pill btn-sm"
                    >
                      Download File
                    </a>
                  </div>
                  <h6 className="mt-2 text-muted">Monday , 2:10 PM</h6>
                </div>
              </div>
            </div>
            <div className="position-relative ps-3">
              <div className="mb-4">
                <span className="position-absolute start-0 translate-middle-x bg-success bg-gradient d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-16">
                  <img
                    src={avatar7.src}
                    alt="avatar-5"
                    className="avatar-xs rounded-circle"
                  />
                </span>
                <div className="ms-2">
                  <h5 className="mb-0 text-dark fw-semibold fs-14 lh-base">
                    Alex Smith Attached Photos
                  </h5>
                  <div className="row g-2 mt-1">
                    <div className="col-lg-4">
                      <a href="#!">
                        <img
                          src={img6.src}
                          alt=""
                          className="img-fluid rounded"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#!">
                        <img
                          src={image3.src}
                          alt=""
                          className="img-fluid rounded"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#!">
                        <img
                          src={image4.src}
                          alt=""
                          className="img-fluid rounded"
                        />
                      </a>
                    </div>
                  </div>
                  <h6 className="mt-2 text-muted">Monday 1:00 PM</h6>
                </div>
              </div>
            </div>
            <div className="position-relative ps-4">
              <div className="mb-4">
                <span className="position-absolute start-0 avatar-xs translate-middle-x text-bg-warning d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-16">
                  <Icon icon="iconamoon:certificate-badge-duotone"></Icon>
                </span>
                <div className="ms-2">
                  <h5 className="mb-0 text-dark fw-semibold fs-14 lh-base">
                    Achievements
                  </h5>
                  <p className="d-flex align-items-center gap-1 mt-1">
                    <Icon
                      icon="iconamoon:certificate-badge-duotone"
                      className="text-danger fs-20"
                    ></Icon>
                    " Best Product Award"
                  </p>
                  <h6 className="mt-2 text-muted">Monday 9:30 AM</h6>
                </div>
              </div>
            </div>
          </div>
          <a href="#!" className="btn btn-dark w-100">
            View All
          </a>
        </div>
      </SimpleBar>
    </Offcanvas>
  );
};

export default RightSidebar;

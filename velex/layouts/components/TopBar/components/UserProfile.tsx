"use client";
import { useState, useRef, useEffect } from "react";
import user1 from "@/assets/images/users/avatar-1.jpg";

const UserDropdown: React.FC<UserDropdownProps> = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown topbar-item" ref={dropdownRef}>
      <button
        type="button"
        className="topbar-button"
        id="page-header-user-dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <a
          type="button"
          className="topbar-button"
          id="page-header-user-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="d-flex align-items-center">
            <img
              className="rounded-circle img-thumbnail shadow"
              width="42"
              src={user1.src}
              alt="avatar-3"
            />
          </span>
        </a>
      </button>

      {isOpen && (
        <div className="dropdown-menu dropdown-menu-end show">
          <h6 className="dropdown-header">Welcome {userName}! </h6>
          <h6 className="dropdown-header">Welcome {"Gaston"}! </h6>

          <a className="dropdown-item" href="pages-profile.html">
            <i className="bx bx-user-circle text-muted fs-18 align-middle me-1"></i>
            <span className="align-middle">Profile</span>
          </a>
          <a className="dropdown-item" href="apps-chat.html">
            <i className="bx bx-message-dots text-muted fs-18 align-middle me-1"></i>
            <span className="align-middle">Messages</span>
          </a>
          <a className="dropdown-item" href="pages-pricing.html">
            <i className="bx bx-wallet text-muted fs-18 align-middle me-1"></i>
            <span className="align-middle">Pricing</span>
          </a>
          <a className="dropdown-item" href="pages-faqs.html">
            <i className="bx bx-help-circle text-muted fs-18 align-middle me-1"></i>
            <span className="align-middle">Help</span>
          </a>
          <a className="dropdown-item" href="auth-lock-screen.html">
            <i className="bx bx-lock text-muted fs-18 align-middle me-1"></i>
            <span className="align-middle">Lock screen</span>
          </a>

          <div className="dropdown-divider my-1"></div>

          <a className="dropdown-item text-danger" href="auth-signin.html">
            <i className="bx bx-log-out fs-18 align-middle me-1"></i>
            <span className="align-middle">Logout</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;

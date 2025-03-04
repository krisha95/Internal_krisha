"use client";

import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import avatar1 from "@/assets/images/users/avatar-1.jpg";

const UserDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown show={isOpen} onToggle={(isOpen) => setIsOpen(isOpen)}>
      <Dropdown.Toggle
        as="a"
        id="page-header-user-dropdown"
        className="topbar-button d-flex align-items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          className="rounded-circle img-thumbnail shadow"
          width={42}
          height={42}
          src={avatar1.src}
          alt="User Avatar"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Header>Welcome!</Dropdown.Header>
        <Dropdown.Item as={Link} href="/pages-profile">
          <Icon
            icon="bx:user-circle"
            className="text-muted fs-18 align-middle me-1"
          />
          Profile
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/apps-chat">
          <Icon
            icon="bx:message-dots"
            className="text-muted fs-18 align-middle me-1"
          />
          Messages
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/pages-pricing">
          <Icon
            icon="bx:wallet"
            className="text-muted fs-18 align-middle me-1"
          />
          Pricing
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/pages-faqs">
          <Icon
            icon="bx:help-circle"
            className="text-muted fs-18 align-middle me-1"
          />
          Help
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/auth-lock-screen">
          <Icon icon="bx:lock" className="text-muted fs-18 align-middle me-1" />
          Lock screen
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item as={Link} href="/auth-signin" className="text-danger">
          <Icon icon="bx:log-out" className="fs-18 align-middle me-1" />
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;

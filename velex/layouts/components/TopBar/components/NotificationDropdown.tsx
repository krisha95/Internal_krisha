"use client";
import { Dropdown, Badge, Image, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import avatar1 from "@/assets/images/users/avatar-1.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import { StaticImageData } from "next/image";
import SimpleBar from "simplebar-react";
import { FaArrowRight } from "react-icons/fa";

interface Notification {
  id: number;
  type: "message" | "comment" | "alert";
  sender: string;
  message: string;
  avatar?: string;
  icon?: string;
  image?: StaticImageData;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: "comment",
    sender: "Josephine Thompson",
    message: "Wow 😍! This admin looks good and awesome design",
    image: avatar1,
  },
  {
    id: 2,
    type: "message",
    sender: "Donoghue Susan",
    message: "Hi, How are you? What about our next meeting?",
    icon: "iconamoon:comment-dots-duotone",
    image: avatar3,
  },
  {
    id: 3,
    type: "comment",
    sender: "Jacob Gines",
    message: "Answered to your comment on the cash flow forecast's graph 🔔.",
    image: avatar3,
  },
  {
    id: 4,
    type: "alert",
    sender: "System",
    message: "You have received 20 new messages in the conversation",
    icon: "iconamoon:comment-dots-duotone",
    image: avatar5,
  },
  {
    id: 5,
    type: "comment",
    sender: "Shawn Bunch",
    message: "Commented on Admin",
    image: avatar5,
  },
];

const NotificationDropdown = () => {
  return (
    <Dropdown className="topbar-item">
      <Dropdown.Toggle
        type="button"
        className="position-relative topbar-button"
      >
        <Icon icon="solar:bell-bing-outline" className="fs-24 align-middle" />
        {notifications.length > 0 && (
          <Badge
            bg="danger"
            className="position-absolute topbar-badge fs-10 translate-middle rounded-pill"
          >
            {notifications.length}
          </Badge>
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-lg dropdown-menu-end">
        <div className="p-3 border-bottom border-dashed">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="m-0 fs-16 fw-semibold">Notifications</h6>
            <Button
              variant="link"
              className="p-0 text-dark fs-14 text-decoration-underline"
            >
              <small>Clear All</small>
            </Button>
          </div>
        </div>

        <SimpleBar className="overflow-auto" style={{ maxHeight: "280px" }}>
          {notifications.map((notification) => (
            <Dropdown.Item
              key={notification.id}
              className="py-3 border-bottom d-flex align-items-center"
            >
              {notification.image ? (
                <Image
                  src={notification.image.src}
                  alt={notification.sender}
                  roundedCircle
                  className="me-2 avatar-sm"
                />
              ) : (
                <span className="avatar-title bg-soft-info text-info fs-20 rounded-circle me-2">
                  <Icon icon={notification.icon || "mdi:account"} />
                </span>
              )}
              <div className="flex-grow-1">
                <p className="mb-0 fw-semibold">{notification.sender}</p>
                <p className="mb-0 text-wrap">{notification.message}</p>
              </div>
            </Dropdown.Item>
          ))}
        </SimpleBar>

        <div className="text-center py-3">
          <Button variant="primary" size="sm">
            View All Notifications
            <FaArrowRight className="ms-1" />
          </Button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;

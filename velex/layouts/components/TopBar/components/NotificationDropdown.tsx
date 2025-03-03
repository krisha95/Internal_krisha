"use client";
import { useState } from "react";
import { Dropdown, Badge, Image, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";

interface Notification {
  id: number;
  type: "message" | "comment" | "alert";
  sender: string;
  message: string;
  avatar?: string;
  icon?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: "comment",
    sender: "Josephine Thompson",
    message: "Wow 😍! This admin looks good and awesome design",
    // avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    type: "message",
    sender: "Donoghue Susan",
    message: "Hi, How are you? What about our next meeting?",
    icon: "iconamoon:comment-dots-duotone",
  },
  {
    id: 3,
    type: "comment",
    sender: "Jacob Gines",
    message: "Answered to your comment on the cash flow forecast's graph 🔔.",
    // avatar: "/images/avatar-3.jpg",
  },
  {
    id: 4,
    type: "alert",
    sender: "System",
    message: "You have received 20 new messages in the conversation",
    icon: "iconamoon:comment-dots-duotone",
  },
  {
    id: 5,
    type: "comment",
    sender: "Shawn Bunch",
    message: "Commented on Admin",
    // avatar: "/images/avatar-5.jpg",
  },
];

const NotificationDropdown = () => {
  const [notifCount, setNotifCount] = useState(notifications.length);

  return (
    <div className="dropdown topbar-item">
      <Button
        type="button"
        className="topbar-button position-relative"
        id="page-header-notifications-dropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <Icon icon="solar:bell-bing-outline" className="fs-4 align-middle" />
        {notifCount > 0 && (
          <Badge
            bg="danger"
            className="position-absolute topbar-badge fs-10 translate-middle rounded-pill"
          >
            {notifCount}
            <Badge className="visually-hidden">unread messages </Badge>
          </Badge>
        )}
      </Button>

      <div
        className="dropdown-menu py-0 dropdown-lg dropdown-menu-end"
        aria-labelledby="page-header-notifications-dropdown"
      >
        <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="m-0 fs-16 fw-semibold">Notifications</h6>
            <button
              className="btn btn-link text-decoration-underline p-0 text-dark fs-14"
              onClick={() => setNotifCount(0)}
            >
              <small>Clear All</small>
            </button>
          </div>
        </div>

        <div className="overflow-auto" style={{ maxHeight: "280px" }}>
          {notifications.map((notif) => (
            <Dropdown.Item
              key={notif.id}
              className="py-3 border-bottom d-flex align-items-center"
            >
              {notif.avatar ? (
                <Image
                  src={notif.avatar}
                  alt={notif.sender}
                  className="me-2 avatar-sm rounded-circle"
                />
              ) : (
                <span className="avatar-title bg-soft-info text-info fs-20 rounded-circle me-2">
                  <Icon icon={notif.icon || "mdi:account"} />
                </span>
              )}
              <div className="flex-grow-1">
                <p className="mb-0 fw-semibold">{notif.sender}</p>
                <p className="mb-0 text-wrap">{notif.message}</p>
              </div>
            </Dropdown.Item>
          ))}
        </div>

        <div className="text-center py-3">
          <button className="btn btn-primary btn-sm">
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;

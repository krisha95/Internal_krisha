import React, { ReactNode } from "react";
import avatar1 from "@/assets/images/users/avatar-1.jpg";
import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import avatar8 from "@/assets/images/users/avatar-8.jpg";
import avatar9 from "@/assets/images/users/avatar-9.jpg";
import avatar10 from "@/assets/images/users/avatar-10.jpg";
import { StaticImageData } from "next/image";
import { LuUsersRound } from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";

const ContactList = () => {
  interface Contact {
    id: number;
    icon?: ReactNode;
    image?: StaticImageData | string;
    name: string;
    status?: string;
  }

  const contacts: Contact[] = [
    { id: 1, icon: <LuUsersRound />, name: "New Group" },
    { id: 2, icon: <FiUserPlus />, name: "New Contact" },
    { id: 3, image: avatar3, name: "Gaston Lapierre" },
    {
      id: 4,
      image: avatar4,
      name: "Fantina LeBatelier",
      status: "** no status **",
    },
    { id: 5, image: avatar5, name: "Gilbert Chicoine", status: "|| Karma ||" },
    {
      id: 6,
      image: avatar6,
      name: "Mignonette Brodeur",
      status: "Hey there! I am using Chat.",
    },
    { id: 7, image: avatar7, name: "Thomas Menard", status: "TM" },
    { id: 8, image: avatar8, name: "Melisande Lapointe", status: "Available" },
    {
      id: 9,
      image: avatar9,
      name: "Danielle Despins",
      status: "Hey there! I am using Chat.",
    },
  ];

  return (
    <div id="contact-list">
      <div className="px-3 mb-3 chat-setting-height" data-simplebar>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="d-flex align-items-center position-relative py-2"
          >
            {contact.icon ? (
              <a
                href="#"
                className="me-2 stretched-link rounded-circle text-bg-primary avatar d-flex align-items-center justify-content-center fs-18"
              >
                <i>{contact.icon}</i>
              </a>
            ) : (
              <a href="#!" className="stretched-link">
                {typeof contact.image === "string" ? (
                  <img
                    src={contact.image}
                    className="me-2 rounded-circle"
                    height="36"
                    alt={`avatar-${contact.id}`}
                  />
                ) : (
                  <img
                    src={contact.image?.src}
                    className="me-2 rounded-circle"
                    height="36"
                    alt={`avatar-${contact.id}`}
                  />
                )}
              </a>
            )}
            <div className="flex-grow-1">
              <h5 className="my-0 fs-14">{contact.name}</h5>
              {contact.status && (
                <p className="mt-1 mb-0 text-muted">
                  <span className="w-75">{contact.status}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;

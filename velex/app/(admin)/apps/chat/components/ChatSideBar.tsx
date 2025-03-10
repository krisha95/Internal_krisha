"use client";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
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
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ChatList from "../tabcomponents/ChatList";
import SimpleBar from "simplebar-react";
import GroupList from "../tabcomponents/GroupList";
import ContactList from "../tabcomponents/ContactList";

const avatars: StaticImageData[] = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
];

const tabs: Tab[] = [
  { id: "chat-list", label: "Chat", href: "#chat-list" },
  { id: "group-list", label: "Group", href: "#group-list" },
  { id: "contact-list", label: "Contact", href: "#contact-list" },
];

const ChatSideBar = () => {
  const [activeTab, setActiveTab] = useState("chat-list");
  return (
    <div
      className="offcanvas-xxl offcanvas-start h-100"
      tabIndex={-1}
      id="Contactoffcanvas"
      aria-labelledby="ContactoffcanvasLabel"
    >
      <div className="card position-relative overflow-hidden">
        <div className="card-header border-0 d-flex justify-content-between align-items-center">
          <h4 className="card-title">Chat</h4>
          <a
            href="#"
            className="fs-18"
            type="button"
            data-bs-toggle="offcanvas"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <IoSettingsOutline />
          </a>
        </div>

        <form className="chat-search px-3">
          <div className="chat-search-box position-relative">
            <input
              className="form-control search-input"
              type="text"
              name="search"
              placeholder="Search ..."
            />
            <button
              type="submit"
              className="btn btn-sm btn-link search-icon p-0"
            >
              <BiSearchAlt />
            </button>
          </div>
        </form>
        <div className="swiper mySwiper p-1 mx-3">
          <Swiper
            loop={true}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            slidesPerView="auto"
            spaceBetween={8}
            autoHeight={true}
          >
          {avatars.map((src, index) => (
            <SwiperSlide key={index} className="avatar-sm">
              <div className="chat-user-status-box">
                  <span>
                    <img
                      src={src.src}
                      alt={`avatar-${index + 1}`}
                      className="img-fluid avatar-sm rounded-circle avatar-border"
                    />
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ul className="nav nav-tabs nav-justified nav-bordered border-top mt-2">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.id}>
              <a
                href={tab.href}
                data-bs-toggle="tab"
                aria-expanded={activeTab === tab.id ? "true" : "false"}
                className={`nav-link py-2 ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
        {/* <div className="tab-content"> */}
        <SimpleBar className="scrollbar tab-content">
          {activeTab === "chat-list" && <ChatList />}
          {activeTab === "group-list" && <GroupList />}
          {activeTab === "contact-list" && <ContactList />}
        </SimpleBar>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ChatSideBar;

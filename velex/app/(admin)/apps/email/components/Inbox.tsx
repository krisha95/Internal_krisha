"use client";
import React, { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSolidChat, BiSolidInbox } from "react-icons/bi";
import { BsTagFill } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";
import UpdatesMail from "./UpdatesMail";
import ForumsMail from "./ForumsMail";
import Primary from "./Primary";
import SocialMail from "./SocialMail";
import PromotionsMail from "./PromotionsMail";


const Inbox = () => {
  const [activeTab, setActiveTab] = useState("primaryMail");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tab-content pt-0" id="email-tabContent">
      <div
        className="tab-pane fade active show"
        id="email-inbox"
        role="tabpanel"
        aria-labelledby="email-inbox-tab"
      >
        <div>
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <a
                href="#primaryMail"
                className={`nav-link d-flex align-items-center ${
                  activeTab === "primaryMail" ? "active" : ""
                }`}
                onClick={() => handleTabClick("primaryMail")}
              >
                <span className="me-2">
                  <BiSolidInbox className="fs-18" />
                </span>
                <span className="d-none d-md-block">Primary</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#socialMail"
                className={`nav-link d-flex align-items-center ${
                  activeTab === "socialMail" ? "active" : ""
                }`}
                onClick={() => handleTabClick("socialMail")}
              >
                <span className="me-2">
                  <LuUsersRound className="fs-18" />
                </span>
                <span className="d-none d-md-block">Social</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#PromotionsMail"
                className={`nav-link d-flex align-items-center ${
                  activeTab === "PromotionsMail" ? "active" : ""
                }`}
                onClick={() => handleTabClick("PromotionsMail")}
              >
                <span className="me-2">
                  <BsTagFill className="fs-18" />
                </span>
                <span className="d-none d-md-block">Promotions</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#updatesMail"
                className={`nav-link d-flex align-items-center ${
                  activeTab === "updatesMail" ? "active" : ""
                }`}
                onClick={() => handleTabClick("updatesMail")}
              >
                <span className="me-2">
                  <AiFillInfoCircle className="bx bxs-info-circle fs-18" />
                </span>
                <span className="d-none d-md-block">Updates</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#forumsMail"
                className={`nav-link d-flex align-items-center ${
                  activeTab === "forumsMail" ? "active" : ""
                }`}
                onClick={() => handleTabClick("forumsMail")}
              >
                <span className="me-2">
                  <BiSolidChat className="fs-18" />
                </span>
                <span className="d-none d-md-block">Forums</span>
              </a>
            </li>
          </ul>
        </div>
        {activeTab === "primaryMail" && <Primary />}
        {activeTab === "socialMail" && <SocialMail />}
        {activeTab === "PromotionsMail" && <PromotionsMail />}
        {activeTab === "updatesMail" && <UpdatesMail />}
        {activeTab === "forumsMail" && <ForumsMail />}
      </div>
    </div>
  );
};

export default Inbox;

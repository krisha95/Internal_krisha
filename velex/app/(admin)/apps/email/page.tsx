
"use client";
import React, { useState } from "react";
import EmailSideBar from "./EmailSideBar";
import EmailHeader from "./components/EmailHeader";
import TrashMail from "./components/TrashMail";
import ImportantMail from "./ImportantMail";
import StarredMail from "./components/StarredMail";
import Inbox from "./components/Inbox";
import SentMail from "./components/SentMail";
import LabelUpdatesMail from "./components/LabelUpadetMail";
import LabelSocialMail from "./components/LabelSocialMail";
import LabelPromotion from "./components/LabelPromotion";
import LabelForums from "./components/LabelForums";
import EmailDraft from "./EmailDraft";
import PaginationOfMail from "./PaginationOfMail";

const page = () => {
  const [activeTab, setActiveTab] = useState("email-inbox");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="container-xxl">
      <div className="row g-1 mb-3">
        <EmailSideBar onTabChange={handleTabChange} />
        <div className="col-xxl-10">
          <div className="card position-relative overflow-hidden h-100">
            <EmailHeader />
            {activeTab === "email-inbox" && <Inbox />}
            {activeTab === "email-starred" && <StarredMail />}
            {activeTab === "email-draft" && <EmailDraft />}
            {activeTab === "email-sent" && <SentMail />}
            {activeTab === "email-trash" && <TrashMail />}
            {activeTab === "email-important" && <ImportantMail />}
            {activeTab === "email-updates" && <LabelUpdatesMail />}
            {activeTab === "email-social" && <LabelSocialMail />}
            {activeTab === "email-promotion" && <LabelPromotion />}
            {activeTab === "email-forums" && <LabelForums />}
            <PaginationOfMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import { AiOutlineFilePdf, AiOutlineFileText } from "react-icons/ai";
import {
  BiImage,
  BiSolidStar,
  BiSolidTagAlt,
  BiStar,
  BiTagAlt,
} from "react-icons/bi";

interface Attachment {
  type: "image" | "pdf" | "doc";
  name: string;
}

interface Email {
  id: number;
  sender: string;
  subject: string;
  content: string;
  starred: boolean;
  read: boolean;
  unread: boolean;
  date: string;
  important: boolean;
  attachments?: Attachment[];
}

const SocialMail: React.FC = () => {
  const emails: Email[] = [
    {
      id: 15,
      sender: "Daniel J. Olsen",
      subject:
        "Lucas Kriebel (@Daniel J. Olsen) has sent you a direct message on Twitter!",
      content:
        "@Daniel J. Olsen - Very cool :) Nicklas, You have a new direct message.",
      starred: false,
      read: false,
      unread: true,
      important: false,
      date: "11:49 am",
    },
    {
      id: 16,
      sender: "Jack P. Roldan",
      subject: "Images",
      content: "",
      starred: true,
      read: false,
      unread: false,
      important: true,
      date: "Feb 21",
      attachments: [
        { type: "image", name: "IMG_201" },
        { type: "image", name: "IMG_202" },
        { type: "image", name: "IMG_203" },
      ],
    },
    {
      id: 17,
      sender: "Betty C. Cox (11)",
      subject: "Train/Bus",
      content:
        "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
      starred: false,
      read: false,
      unread: false,
      important: false,
      date: "Feb 19",
    },
    {
      id: 18,
      sender: "Medium",
      subject: "This Week's Top Stories",
      content:
        "Our top pick for you on Medium this week The Man Who Destroyed America's Ego",
      starred: false,
      read: false,
      unread: false,
      important: false,
      date: "Feb 28",
    },
    {
      id: 19,
      sender: "Death to Stock",
      subject: "(no subject)",
      content: "",
      starred: true,
      read: false,
      unread: false,
      important: true,
      date: "Feb 28",
      attachments: [
        { type: "pdf", name: "dashboard.pdf" },
        { type: "pdf", name: "pages-data.pdf" },
      ],
    },
    {
      id: 20,
      sender: "Revibe",
      subject: "(no subject)",
      content: "",
      starred: false,
      read: false,
      unread: false,
      important: true,
      date: "Feb 27",
      attachments: [
        { type: "doc", name: "doc1.doc" },
        { type: "doc", name: "doc2.doc" },
        { type: "doc", name: "doc3.doc" },
        { type: "doc", name: "doc4.doc" },
      ],
    },
  ];

  return (
    <div className="tab-pane" id="socialMail">
      <ul className="message-list mb-0">
        {emails.map((email: Email) => (
          <li key={email.id} className={email.unread ? "unread" : ""}>
            <div className="col-mail col-mail-1">
              <div className="checkbox-wrapper-mail">
                <input type="checkbox" id={`InboxChk${email.id}`} />
                <label
                  htmlFor={`InboxChk${email.id}`}
                  className="toggle"
                ></label>
              </div>
              <span className="star-toggle">
                {email.starred ? (
                  <BiSolidStar className="text-warning" />
                ) : (
                  <BiStar />
                )}
              </span>
              <span className="important-toggle">
                {email.important ? (
                  <BiSolidTagAlt className="text-warning" />
                ) : (
                  <BiTagAlt />
                )}
              </span>
              <a
                data-bs-toggle="offcanvas"
                href="#email-read"
                className="title"
              >
                {email.sender}
              </a>
            </div>
            <div className="col-mail col-mail-2">
              <a
                data-bs-toggle="offcanvas"
                href="#email-read"
                className="subject"
              >
                {email.subject} &nbsp;&ndash;&nbsp;
                <span>{email.content}</span>
                {email.attachments &&
                  email.attachments.map((attachment, index) => (
                    <span
                      key={index}
                      className="badge bg-light border text-dark fw-semibold ms-1"
                    >
                      {attachment.type === "image" && (
                        <BiImage className="text-primary me-2" />
                      )}
                      {attachment.type === "pdf" && (
                        <AiOutlineFilePdf className="text-danger me-2" />
                      )}
                      {attachment.type === "doc" && (
                        <AiOutlineFileText className="text-blue me-2" />
                      )}
                      {attachment.name}
                    </span>
                  ))}
              </a>
              <div className="date">{email.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMail;

import React from "react";
import {
  BiImages,
  BiSolidFileDoc,
  BiSolidFilePdf,
  BiSolidStar,
  BiSolidTagAlt,
  BiStar,
  BiTagAlt,
} from "react-icons/bi";

interface Attachment {
  type: "pdf" | "doc";
  name: string;
}

interface Email {
  id: number;
  sender: string;
  subject: string;
  content: string;
  starred: boolean;
  unread: boolean;
  important: boolean;
  date: string;
  attachments?: Attachment[] | string[];
}

const LabelSocialMail: React.FC = () => {
  const emails: Email[] = [
    {
      id: 1,
      sender: "Daniel J. Olsen",
      subject:
        "Lucas Kriebel (@Daniel J. Olsen) has sent you a direct message on Twitter!",
      content:
        "@Daniel J. Olsen - Very cool :) Nicklas, You have a new direct message.",
      starred: false,
      unread: true,
      important: false,
      date: "11:49 am",
    },
    {
      id: 2,
      sender: "Jack P. Roldan",
      subject: "Images",
      content: "",
      starred: true,
      unread: false,
      important: true,
      date: "Feb 21",
      attachments: ["IMG_201", "IMG_202", "IMG_203", "+5"],
    },
    {
      id: 3,
      sender: "Betty C. Cox (11)",
      subject: "Train/Bus",
      content:
        "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
      starred: false,
      unread: false,
      important: false,
      date: "Feb 19",
    },
    {
      id: 4,
      sender: "Medium",
      subject: "This Week's Top Stories",
      content:
        "Our top pick for you on Medium this week The Man Who Destroyed America's Ego",
      starred: false,
      unread: false,
      important: false,
      date: "Feb 28",
    },
    {
      id: 5,
      sender: "Death to Stock",
      subject: "(no subject)",
      content: "",
      starred: true,
      unread: false,
      important: true,
      date: "Feb 28",
      attachments: [
        { type: "pdf", name: "dashboard.pdf" },
        { type: "pdf", name: "pages-data.pdf" },
      ],
    },
    {
      id: 6,
      sender: "Revibe",
      subject: "(no subject)",
      content: "",
      starred: false,
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
    <div
      // className="tab-pane fade"
      id="email-social"
      role="tabpanel"
      aria-labelledby="email-social-tab"
    >
      <ul className="message-list mb-0">
        {emails.map((email) => (
          <li key={email.id} className={email.unread ? "unread" : ""}>
            <div className="col-mail col-mail-1">
              <div className="checkbox-wrapper-mail">
                <input type="checkbox" id={`SocialChk${email.id}`} />
                <label
                  htmlFor={`SocialChk${email.id}`}
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
                      {typeof attachment === "object" &&
                        attachment.type === "pdf" && (
                          <BiSolidFileDoc className="text-danger me-2" />
                        )}
                      {typeof attachment === "object" &&
                        attachment.type === "doc" && (
                          <BiSolidFilePdf className="text-blue me-2" />
                        )}
                      {typeof attachment === "string" && (
                        <BiImages className="text-primary me-2" />
                      )}
                      {typeof attachment === "object"
                        ? attachment.name
                        : attachment}{" "}
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

export default LabelSocialMail;

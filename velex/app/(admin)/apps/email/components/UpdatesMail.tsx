import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BiSolidStar, BiSolidTagAlt, BiStar, BiTagAlt } from "react-icons/bi";

const UpdatesMail = () => {
  const emails: Email[] = [
    {
      id: 26,
      sender: "Medium",
      subject: "This Week's Top Stories",
      content:
        "Our top pick for you on Medium this week The Man Who Destroyed America's Ego",
      starred: false,

      important: false,
      read: false,
      date: "Feb 28",
    },
    {
      id: 27,
      sender: "Death to Stock",
      subject: "(no subject)",
      content: "",
      starred: true,

      important: true,
      read: true,
      date: "Feb 28",
      attachments: [
        { type: "pdf", name: "dashboard.pdf" },
        { type: "pdf", name: "pages-data.pdf" },
      ],
    },
    {
      id: 28,
      sender: "Revibe",
      subject: "(no subject)",
      content: "",
      starred: false,

      read: false,

      important: true,
      date: "Feb 27",
      attachments: ["doc1.doc", "doc2.doc", "doc3.doc", "doc4.doc"],
    },
    {
      id: 29,
      sender: "Erik, me (5)",
      subject: "Regarding our meeting",
      content: "That's great, see you on Thursday!",
      starred: true,

      read: false,

      important: false,
      date: "Feb 24",
    },
    {
      id: 30,
      sender: "KanbanFlow",
      subject: "Task assigned: Clone ARP's website",
      content: "You have been assigned a task by Alex@Work on the board Web.",
      starred: true,
      read: false,

      important: false,
      date: "Feb 24",
    },
    {
      id: 31,
      sender: "Tobias Berggren",
      subject: "Let's go fishing!",
      content:
        "Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
      starred: false,

      important: true,
      read: false,

      date: "Feb 23",
    },
    {
      id: 32,
      sender: "Charukaw, me (7)",
      subject: "Hey man",
      content: "Nah man sorry i don't. Should i get it?",
      starred: true,

      read: false,

      important: false,
      date: "Feb 23",
    },
    {
      id: 33,
      sender: "Stack Exchange",
      subject: "1 new items in your Stackexchange inbox",
      content:
        "The following items were added to your Stack Exchange global inbox since you last checked it.",
      starred: true,

      read: false,

      important: false,
      date: "Feb 21",
    },
    {
      id: 34,
      sender: "Google Drive Team",
      subject: "You can now use your storage in Google Drive",
      content:
        "Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.",
      starred: true,

      read: false,

      important: true,
      date: "Feb 20",
    },
  ];

  return (
    <div className="tab-pane" id="updatesMail">
      <ul className="message-list mb-0">
        {emails.map((email) => (
          <li key={email.id} className={email.read ? "unread" : ""}>
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
                      {typeof attachment === "object" ? (
                        <>
                          {attachment.type === "pdf" && (
                            <AiOutlineFilePdf className="text-danger me-2" />
                          )}
                          {attachment.name}
                        </>
                      ) : (
                        attachment
                      )}
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

export default UpdatesMail;

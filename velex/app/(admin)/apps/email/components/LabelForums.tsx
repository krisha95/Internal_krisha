import React from "react";
import { BiSolidStar, BiSolidTagAlt, BiStar, BiTagAlt } from "react-icons/bi";

const LabelForums = () => {
  interface Email {
    id: number;
    sender: string;
    subject: string;
    content: string;
    starred: boolean;
    unread: boolean;
    important: boolean;
    date: string;
  }

  const emails: Email[] = [
    {
      id: 8,
      sender: "KanbanFlow",
      subject: "Task assigned: Clone ARP's website",
      content: "You have been assigned a task by Alex@Work on the board Web.",
      starred: true,
      unread: false,
      important: false,
      date: "Feb 24",
    },
    {
      id: 9,
      sender: "Tobias Berggren",
      subject: "Let's go fishing!",
      content:
        "Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
      starred: false,
      unread: false,
      important: true,
      date: "Feb 23",
    },
    {
      id: 10,
      sender: "Charukaw, me (7)",
      subject: "Hey man",
      content: "Nah man sorry i don't. Should i get it?",
      starred: true,
      unread: false,
      important: false,
      date: "Feb 23",
    },
    {
      id: 11,
      sender: "Stack Exchange",
      subject: "1 new items in your Stackexchange inbox",
      content:
        "The following items were added to your Stack Exchange global inbox since you last checked it.",
      starred: true,
      unread: false,
      important: false,
      date: "Feb 21",
    },
    {
      id: 12,
      sender: "Google Drive Team",
      subject: "You can now use your storage in Google Drive",
      content:
        "Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.",
      starred: true,
      unread: false,
      important: true,
      date: "Feb 20",
    },
  ];
  return (
    <div
      //   className="tab-pane fade"
      id="email-forums"
      role="tabpanel"
      aria-labelledby="email-forums-tab"
    >
      <ul className="message-list mb-0">
        {emails.map((email) => (
          <li key={email.id} className={email.unread ? "unread" : ""}>
            <div className="col-mail col-mail-1">
              <div className="checkbox-wrapper-mail">
                <input type="checkbox" id={`UpdateChk${email.id}`} />
                <label
                  htmlFor={`UpdateChk${email.id}`}
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
              </a>
              <div className="date">{email.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabelForums;

import React from "react";
import { BiSolidTagAlt, BiTagAlt } from "react-icons/bi";
import { BsStar, BsStarFill } from "react-icons/bs";

const ForumsMail = () => {
  const emails: Email[] = [
    {
      id: 35,
      sender: "KanbanFlow",
      subject: "Task assigned: Clone ARP's website",
      content: "You have been assigned a task by Alex@Work on the board Web.",
      starred: true,
      read: true,
      important: false,
      date: "Feb 24",
    },
    {
      id: 36,
      sender: "Tobias Berggren",
      subject: "Let's go fishing!",
      content:
        "Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
      starred: false,
      read: true,
      important: true,
      date: "Feb 23",
    },
    {
      id: 37,
      sender: "Charukaw, me (7)",
      subject: "Hey man",
      content: "Nah man sorry i don't. Should i get it?",
      starred: true,
      read: false,
      important: false,
      date: "Feb 23",
    },
    {
      id: 38,
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
      id: 39,
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
    <div className="tab-pane" id="forumsMail">
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
                  <BsStarFill className="text-warning" />
                ) : (
                  <BsStar />
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

export default ForumsMail;

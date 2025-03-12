import React from "react";
import { BiSolidStar, BiSolidTagAlt, BiStar, BiTagAlt } from "react-icons/bi";


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

const PromotionsMail: React.FC = () => {
  const emails: Email[] = [
    {
      id: 21,
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
      id: 22,
      sender: "Charukaw, me (7)",
      subject: "Hey man",
      content: "Nah man sorry i don't. Should i get it?",
      starred: true,
      unread: false,
      important: false,
      date: "Feb 23",
    },
    {
      id: 23,
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
      id: 24,
      sender: "Google Drive Team",
      subject: "You can now use your storage in Google Drive",
      content:
        "Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.",
      starred: true,
      unread: false,
      important: false,
      date: "Feb 20",
    },
    {
      id: 25,
      sender: "Peter, me (3)",
      subject: "Hello",
      content:
        "Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)",
      starred: false,
      unread: false,
      important: false,
      date: "Mar 6",
    },
  ];

  return (
    <div className="tab-pane" id="PromotionsMail">
      <ul className="message-list mb-0">
        {emails.map((email) => (
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
              </a>
              <div className="date">{email.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromotionsMail;

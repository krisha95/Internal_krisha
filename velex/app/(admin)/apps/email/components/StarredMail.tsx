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

const StarredMail = () => {
  const emails: Email[] = [
    {
      id: 1,
      sender: "Daniel J. Olsen",
      subject:
        "Lucas Kriebel (@Daniel J. Olsen) has sent you a direct message on Twitter!",
      content:
        "@Daniel J. Olsen - Very cool :) Nicklas, You have a new direct message.",
      starred: true,
      unread: true,
      important: true,
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
      starred: true,
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
      starred: true,
      unread: true,
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
      important: false,
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
      starred: true,
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
    {
      id: 7,
      sender: "Erik, me (5)",
      subject: "Regarding our meeting",
      content: "That's great, see you on Thursday!",
      starred: true,
      unread: false,
      important: false,
      date: "Feb 24",
    },
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
      starred: true,
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
      important: true,
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
      important: false,
      date: "Feb 20",
    },
    {
      id: 13,
      sender: "Peter, me (3)",
      subject: "Hello",
      content:
        "Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)",
      starred: true,
      unread: false,
      important: true,
      date: "Mar 6",
    },
    {
      id: 14,
      sender: "me, Susanna (7)",
      subject:
        "Since you asked... and i'm inconceivably bored at the train station",
      content:
        "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
      starred: true,
      unread: false,
      important: false,
      date: "Mar 6",
    },
  ];

  return (
    <div
      // className="tab-pane fade"
      id="email-starred"
      role="tabpanel"
      aria-labelledby="email-starred-tab"
    >
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

export default StarredMail;

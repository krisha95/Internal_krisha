import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import avatar8 from "@/assets/images/users/avatar-8.jpg";
import avatar9 from "@/assets/images/users/avatar-9.jpg";
import avatar10 from "@/assets/images/users/avatar-10.jpg";
import { BiCheckDouble } from "react-icons/bi";
import SimpleBar from "simplebar-react";

interface Chat {
  id: number;
  name: string;
  avatar: StaticImageData;
  message: string;
  time: string;
  status: "read" | "unread" | "typing";
}

const ChatList = () => {
  const chatData: Chat[] = [
    {
      id: 1,
      name: "Gaston Lapierre",
      message: "How are you today?",
      time: "10:20am",
      avatar: avatar2,
      status: "read",
    },
    {
      id: 2,
      name: "Fantina LeBatelier",
      message: "Hey! a reminder for tomorrow's meeting...",
      time: "11:03am",
      avatar: avatar3,
      status: "read",
    },
    {
      id: 3,
      name: "Gilbert Chicoine",
      message: "typing...",
      time: "now",
      avatar: avatar4,
      status: "typing",
    },
    {
      id: 4,
      name: "Mignonette Brodeur",
      message: "Are we going to have this week's planning meeting today?",
      time: "Yesterday",
      avatar: avatar5,
      status: "read",
    },
    {
      id: 5,
      name: "Thomas Menard",
      message: "Please check this template...",
      time: "Yesterday",
      avatar: avatar6,
      status: "read",
    },
    {
      id: 6,
      name: "Melisande Lapointe",
      message:
        "Are you free for 10 minutes? Would like to discuss something...",
      time: "Yesterday",
      avatar: avatar7,
      status: "read",
    },
    {
      id: 7,
      name: "Danielle Despins",
      message: "How are you?",
      time: "7/8/21",
      avatar: avatar8,
      status: "read",
    },
    {
      id: 8,
      name: "Onfroi Pichette",
      message: "What's going on?",
      time: "7/8/21",
      avatar: avatar9,
      status: "read",
    },
    {
      id: 9,
      name: "Kari Boisvert",
      message: "Would you like to join us?",
      time: "7/8/21",
      avatar: avatar10,
      status: "unread",
    },
  ];

  const [chats] = useState(chatData);
  return (
    <div className="show active" id="chat-list">
      <SimpleBar className="scrollbar">
        <div
          className="px-3 mb-3 chat-setting-height show active"
          id="chat-list"
        >
          <ListGroup>
            {chats.map((chat) => (
              <ListGroup.Item
                key={chat.id}
                action
                className={`border-0 p-2 ${
                  chat.status === "typing"
                    ? "bg-light bg-opacity-50 rounded-1"
                    : ""
                }`}
              >
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 position-relative">
                    <Image
                      src={chat.avatar}
                      alt={chat.name}
                      width={36}
                      height={36}
                      className="rounded-circle me-2"
                    />
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <h5 className="my-0 d-flex justify-content-between">
                      {chat.name}
                      <span className="text-muted fs-13">{chat.time}</span>
                    </h5>
                    <p
                      className={`mt-1 mb-0 fs-13 text-muted d-flex justify-content-between`}
                    >
                      <span
                        className={`w-75 ${
                          chat.status === "typing" ? "text-primary" : ""
                        }`}
                      >
                        {chat.message}
                      </span>
                      {chat.status === "read" && (
                        <BiCheckDouble className="text-success" />
                      )}
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </SimpleBar>
    </div>
  );
};

export default ChatList;

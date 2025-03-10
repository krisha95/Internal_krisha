"use client";
import React, { useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  Image,
  InputGroup,
  Offcanvas,
} from "react-bootstrap";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import img1 from "@/assets/images/small/img-1.jpg";
import img2 from "@/assets/images/small/img-2.jpg";
import img3 from "@/assets/images/small/img-3.jpg";
import { MdLink, MdMoreVert, MdOutlineVideocam } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import {
  BsArrowRightCircle,
  BsCameraVideo,
  BsEmojiSmile,
  BsReply,
} from "react-icons/bs";
import { BiCheckDouble, BiDotsVerticalRounded, BiSend } from "react-icons/bi";
import SimpleBar from "simplebar-react";
import { StaticImageData } from "next/image";
import { LuMenu, LuShare2 } from "react-icons/lu";
import { PiCopySimpleThin } from "react-icons/pi";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgMusic, CgProfile } from "react-icons/cg";
import { CiImageOn, CiSearch } from "react-icons/ci";
import ChatSideBar from "../components/ChatSideBar";

interface Message {
  id: number;
  text: string;
  sender: "user" | "other";
  time: string;
  attachments?: StaticImageData[];
}

export const DropdownMenu = () => (
  <div className="chat-conversation-actions dropdown dropstart">
    <Dropdown>
      <Dropdown.Toggle variant="link" id="dropdown-basic">
        <BiDotsVerticalRounded className="fs-18" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#">
          <BsReply className="me-2" />
          Reply
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <LuShare2 className="me-2" />
          Forward
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <PiCopySimpleThin className="me-2" />
          Copy
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <IoBookmarkOutline className="me-2" />
          Bookmark
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <FaRegStar className="me-2" />
          Starred
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <GrStatusInfo className="me-2" />
          Mark as Unread
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <RiDeleteBin6Line className="me-2" />
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

const ChatBox = () => {
  const [newMessage, setNewMessage] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle the sidebar open/close
  };

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey 😊", sender: "user", time: "8:20 am" },
    { id: 2, text: "Hi", sender: "other", time: "8:20 am" },
    {
      id: 3,
      text: "Hi Gaston, thanks for joining the meeting. Let's dive into our quarterly performance review.",
      sender: "user",
      time: "8:25 am",
    },
    {
      id: 4,
      text: "Hi Gilbert, thanks for having me. I'm ready to discuss how things have been going.",
      sender: "other",
      time: "8:25 am",
    },
    {
      id: 5,
      text: "",
      sender: "user",
      time: "8:26 am",
      attachments: [img1, img2, img3],
    },
    {
      id: 6,
      text: "I appreciate your honesty. Can you elaborate on some of those challenges? I want to understand how we can support you better in the future.",
      sender: "other",
      time: "8:27 am",
    },
    {
      id: 7,
      text: "Thanks, Emily. I appreciate your support. Overall, I'm optimistic about our team's performance and looking forward to tackling new challenges in the next quarter.",
      sender: "user",
      time: "8:29 am",
    },
  ]);

  const user = {
    name: "Gilbert Chicoine",
    avatar: avatar4,
    status: "typing...",
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="card position-relative overflow-hidden">
      <div className="card-header d-flex align-items-center mh-100">
        <Button
          variant="light"
          className="d-xxl-none d-flex align-items-center px-2 me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#Contactoffcanvas"
          aria-controls="Contactoffcanvas"
          onClick={toggleSidebar}
        >
          <LuMenu />
        </Button>
        {isSidebarOpen && (
          //   <Offcanvas show={Offcanvas} backdrop={true}>
          //     <Offcanvas.Body>
          <ChatSideBar />
          //     </Offcanvas.Body>
          //   </Offcanvas>
        )}

        <div className="d-flex align-items-center">
          <img
            src={user.avatar.src}
            className="me-2 rounded"
            height="36"
            alt="avatar-4"
          />
          <div className="d-none d-md-flex flex-column">
            <h5 className="my-0 fs-16 fw-semibold">
              <a
                data-bs-toggle="offcanvas"
                href="#user-profile"
                className="text-dark"
              >
                {user.name}
              </a>
            </h5>
            <p className="mb-0 text-success fw-semibold fst-italic">
              {user.status}
            </p>
          </div>
        </div>

        <div className="flex-grow-1">
          <ul className="list-inline float-end d-flex gap-3 mb-0">
            <li className="list-inline-item fs-20">
              <a href="javascript:void(0);" className="text-dark">
                <MdOutlineVideocam />
              </a>
            </li>

            <li className="list-inline-item fs-20">
              <a href="javascript:void(0);" className="text-dark">
                <TbPhoneCall />
              </a>
            </li>

            <li className="list-inline-item fs-20">
              <a
                data-bs-toggle="offcanvas"
                href="#user-profile"
                className="text-dark"
              >
                <FiUser />
              </a>
            </li>
            <li className="list-inline-item fs-20 dropdown d-none d-md-flex">
              <Dropdown>
                <Dropdown.Toggle
                  as="a"
                  href="javascript:void(0);"
                  className="dropdown-toggle arrow-none text-dark"
                  id="dropdown-custom-components"
                >
                  <MdMoreVert />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  <Dropdown.Item href="javascript:void(0);">
                    <CgProfile className="me-2" /> View Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="javascript:void(0);">
                    <CgMusic className="me-2" />
                    Media, Links and Docs
                  </Dropdown.Item>
                  <Dropdown.Item href="javascript:void(0);">
                    <CiSearch className="me-2" />
                    Search
                  </Dropdown.Item>
                  <Dropdown.Item href="javascript:void(0);">
                    <CiImageOn className="me-2" />
                    Wallpaper
                  </Dropdown.Item>
                  <Dropdown.Item href="javascript:void(0);">
                    <BsArrowRightCircle className="me-2" />
                    More
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>

      <div className="chat-box">
        <SimpleBar className="scrollbar">
          <ul className="chat-conversation-list p-3 chatbox-height">
            {messages.map((message) => (
              <li
                key={message.id}
                className={`clearfix ${
                  message.sender === "other" ? "odd" : ""
                }`}
              >
                <div
                  className={`chat-conversation-text ${
                    message.sender === "other" ? "ms-0" : ""
                  }`}
                >
                  <div
                    className={`d-flex ${message.sender === "other" ? "" : ""}`}
                  >
                    {message.sender === "other" && <DropdownMenu />}
                    <div className="chat-ctext-wrap">
                      {message.text && <p>{message.text}</p>}
                      {message.attachments && (
                        <div>
                          {message.attachments.map((attachment, index) => (
                            <a key={index} href="javascript:void(0);">
                              <Image
                                src={attachment.src}
                                alt="attachment"
                                thumbnail
                                className="me-1"
                                style={{ height: "84px" }}
                              />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                    {message.sender === "user" && <DropdownMenu />}
                  </div>
                  <p className="text-muted fs-12 mb-0 mt-1">
                    {message.time}
                    {message.sender === "other" && (
                      <BiCheckDouble className="ms-1 text-primary" />
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SimpleBar>
      </div>
      <div className="bg-light bg-opacity-50 p-2">
        <Form
          onSubmit={handleSendMessage}
          className="needs-validation"
          noValidate
        >
          <div className="row align-items-center">
            <div className="col mb-2 mb-sm-0 d-flex">
              <InputGroup>
                <Button variant="light" className="d-flex align-items-center">
                  <BsEmojiSmile className="fs-18" />
                </Button>
                <Form.Control
                  type="text"
                  placeholder="Enter your message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="col-sm-auto">
              <div className="btn-group btn-toolbar">
                <Button variant="light">
                  <MdLink className="fs-18" />
                </Button>
                <Button variant="light">
                  <BsCameraVideo className="fs-18" />
                </Button>
                <Button type="submit" variant="primary">
                  <BiSend className="fs-18" />
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChatBox;

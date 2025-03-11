"use client";
import React, { useState } from "react";
import { Button, Dropdown, Form, Image, InputGroup } from "react-bootstrap";
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

interface Message {
  id: number;
  text: string;
  sender: "user" | "other";
  time: string;
  attachments?: StaticImageData[];
}

interface UserProfileProps {
  isProfileOpen: boolean;
  toggleProfileSidebar: () => void;
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
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileSidebar = () => {
    setProfileOpen(!isProfileOpen);
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
        {/* {isSidebarOpen ? (
          <Offcanvas
            show={isSidebarOpen}
            onHide={toggleSidebar}
            backdrop={true}
          >
            <Offcanvas.Body>
              <ChatSideBar />
            </Offcanvas.Body>
          </Offcanvas>
        ) : (
          <ChatSideBar />
        )} */}

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
                onClick={toggleProfileSidebar}
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
        <ul className="chat-conversation-list p-3 chatbox-height">
          <SimpleBar className="scrollbar">
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
          </SimpleBar>
        </ul>
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

      <UserProfile
        isProfileOpen={isProfileOpen}
        toggleProfileSidebar={toggleProfileSidebar}
      />
    </div>
  );
};

export default ChatBox;

export const UserProfile: React.FC<UserProfileProps> = ({
  isProfileOpen,
  toggleProfileSidebar,
}) => {
  return (
    <div
      className={`offcanvas offcanvas-end position-absolute shadow border-start ${
        isProfileOpen ? "show" : ""
      }`}
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex={-1}
      id="user-profile"
      aria-labelledby="user-profileLabel"
      style={{ display: isProfileOpen ? "block" : "none" }}
    >
      <div className="offcanvas-header">
        <h5
          className="offcanvas-title text-truncate w-50"
          id="user-profileLabel"
        >
          Profile
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={toggleProfileSidebar}
        ></button>
      </div>
      <div className="offcanvas-body p-0 h-100" data-simplebar>
        <div className="p-3">
          <div className="text-center">
            <img
              src={avatar4.src}
              alt="shreyu"
              className="img-thumbnail avatar-lg rounded-circle mb-1"
            />
            <h4>Gilbert Chicoine</h4>
            <button className="btn btn-primary btn-sm mt-1">
              <i className="bi bi-envelope me-1"></i>Send Email
            </button>
            <p className="text-muted mt-2 fs-14">
              Last Interacted: <strong className="text-success">Online</strong>
            </p>
          </div>

          <div className="mt-3">
            <hr />

            <p className="mt-3 mb-1">
              <strong>
                <i className="bi bi-phone"></i> Phone Number:
              </strong>
            </p>
            <p>+1 456 9595 9594</p>

            <p className="mt-3 mb-1">
              <strong>
                <i className="bi bi-geo-alt"></i> Location:
              </strong>
            </p>
            <p>California, USA</p>

            <p className="mt-3 mb-1">
              <strong>
                <i className="bi bi-globe"></i> Languages:
              </strong>
            </p>
            <p>English, German, Spanish</p>

            <p className="mt-3 mb-2">
              <strong>
                <i className="bi bi-people"></i> Groups:
              </strong>
            </p>
            <p className="mb-0">
              <span className="badge badge-soft-success p-1 fs-14 me-1">
                Work
              </span>
              <span className="badge badge-soft-primary p-1 fs-14">
                Friends
              </span>
            </p>
          </div>

          <h5 className="mt-3">
            <a href="javascript:void(0);" className="my-0">
              <span className="float-end">See All</span>
              Shared Photoes
            </a>
          </h5>
          <div className="row gx-1 pt-2">
            <div className="col-4">
              <a href="javascript:void(0);">
                <img src={img1.src} alt="img-1" className="img-fluid rounded" />
              </a>
            </div>
            <div className="col-4">
              <a href="javascript:void(0);">
                <img src={img2.src} alt="img-2" className="img-fluid rounded" />
              </a>
            </div>
            <div className="col-4">
              <div className="position-relative overflow-hidden rounded">
                <a href="javascript:void(0);">
                  <img
                    src={img3.src}
                    alt="img-3"
                    className="img-fluid rounded"
                  />
                  <div className="bg-overlay bg-dark"></div>
                  <h3 className="position-absolute top-50 start-50 translate-middle my-0 text-white">
                    +3
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

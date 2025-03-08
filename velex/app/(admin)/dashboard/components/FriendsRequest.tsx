"use client";
import React from "react";
import { Card, Button, Dropdown, Image } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import avatar10 from "@/assets/images/users/avatar-10.jpg";
import avatar9 from "@/assets/images/users/avatar-9.jpg";
import avatar8 from "@/assets/images/users/avatar-8.jpg";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar1 from "@/assets/images/users/avatar-1.jpg";

import { StaticImageData } from "next/image";
import { TbDotsVertical } from "react-icons/tb";
import { PiUserListFill } from "react-icons/pi";
import { BsSendFill } from "react-icons/bs";
import { BiBlock, BiUserX } from "react-icons/bi";

interface Friend {
  id: number;
  name: string;
  image: StaticImageData;
  mutualFriends: number;
}

const FriendsRequest = () => {
  const friends: Friend[] = [
    { id: 1, name: "Victoria P. Miller", image: avatar10, mutualFriends: 0 },
    { id: 2, name: "Dallas C. Payne", image: avatar9, mutualFriends: 856 },
    { id: 3, name: "Florence A. Lopez", image: avatar8, mutualFriends: 52 },
    { id: 4, name: "Gail A. Nix", image: avatar7, mutualFriends: 12 },
    { id: 5, name: "Lynne J. Petty", image: avatar6, mutualFriends: 0 },
    { id: 6, name: "Victoria P. Miller", image: avatar5, mutualFriends: 0 },
    { id: 7, name: "Dallas C. Payne", image: avatar4, mutualFriends: 856 },
    { id: 8, name: "Florence A. Lopez", image: avatar3, mutualFriends: 52 },
    { id: 9, name: "Gail A. Nix", image: avatar2, mutualFriends: 12 },
    { id: 10, name: "Lynne J. Petty", image: avatar1, mutualFriends: 0 },
  ];

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Friends Request (10)</h4>
        <Button variant="primary" size="sm" className="rounded-pill">
          View All
        </Button>
      </Card.Header>
      <Card.Body className="p-0 pb-3">
        <SimpleBar style={{ maxHeight: "385px", overflowY: "auto" }}>
          <div className="p-3">
            {friends.map((friend) => (
              <div key={friend.id} className="d-flex align-items-center mb-3">
                <div className="flex-shrink-0">
                  <Image
                    src={friend.image.src}
                    className="img-fluid avatar-sm rounded me-2"
                    alt={friend.name}
                  />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1 fs-14">
                    <a href="#!">{friend.name}</a>
                  </h5>
                  <p className="mb-0">
                    {friend.mutualFriends > 0
                      ? `${friend.mutualFriends} mutual friends`
                      : "No mutual friends"}
                  </p>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as="a"
                    href="#!"
                    className="text-dark"
                    id={`dropdown-${friend.id}`}
                  >
                    <TbDotsVertical className="fs-18" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu align="end">
                    <Dropdown.Item href="#">
                      <PiUserListFill className="me-1" />
                      See Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <BsSendFill className="me-1" />
                      Message to Victoria
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <BiUserX className="me-1" />
                      Unfriend Victoria
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <BiBlock className="me-1" />
                      Block Victoria
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ))}
          </div>
        </SimpleBar>
      </Card.Body>
    </Card>
  );
};

export default FriendsRequest;

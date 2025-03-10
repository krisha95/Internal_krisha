import React from "react";
import { FaUser } from "react-icons/fa";

interface Group {
  id: number;
  name: string;
  shortName: string;
  unreadCount?: number;
}

const groups: Group[] = [
  { id: 2, name: "#General", shortName: "G" },
  { id: 3, name: "#Company", shortName: "C", unreadCount: 33 },
  { id: 4, name: "#Life Suckers", shortName: "L", unreadCount: 17 },
  { id: 5, name: "#Drama Club", shortName: "D" },
  { id: 6, name: "#Unknown Friends", shortName: "U" },
  { id: 7, name: "#Family Ties", shortName: "F", unreadCount: 65 },
  { id: 8, name: "#2Good4U", shortName: "2" },
];

const GroupList = () => {
  return (
    <div id="group-list">
      <div className="px-3 mb-3 chat-setting-height" data-simplebar>
        <div className="d-flex align-items-center position-relative mb-3">
          <a className="me-2 stretched-link rounded text-bg-primary avatar d-flex align-items-center justify-content-center fs-18">
            <i className="bx bxs-user"></i>
            <FaUser />
          </a>
          <div className="flex-grow-1">
            <h5 className="my-0 fs-14">New Group</h5>
          </div>
        </div>
        {groups.map((group) => (
          <div
            key={group.id}
            className="d-flex mb-3 align-items-center position-relative"
          >
            <a
              href="javascript:void(0);"
              className="me-2 stretched-link rounded bg-soft-primary text-primary avatar d-flex align-items-center justify-content-center fs-18"
            >
              {group.shortName}
            </a>
            <div className="flex-grow-1 ps-1 overflow-hidden">
              {group.unreadCount && (
                <div className="float-end">
                  <span className="badge badge-outline-danger">
                    +{group.unreadCount}
                  </span>
                </div>
              )}

              <h5 className="fs-14 m-0">{group.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupList;

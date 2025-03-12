import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const PaginationOfMail = () => {
  return (
    <div className="px-3 py-2 mt-auto">
      <div className="d-flex align-items-center justify-content-between">
        <div className="">Showing 1 - 20 of 289</div>
        <div className="btn-group">
          <button type="button" className="btn btn-light btn-sm">
            <BiChevronLeft />
          </button>
          <button type="button" className="btn btn-primary btn-sm">
            <BiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationOfMail;

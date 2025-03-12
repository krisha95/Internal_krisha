import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import {
  BiArrowBack,
  BiArchive,
  BiInfoSquare,
  BiTrash,
  BiPaperclip,
} from "react-icons/bi";
import img1 from "@/assets/images/small/img-1.jpg";
import img2 from "@/assets/images/small/img-2.jpg";
import img3 from "@/assets/images/small/img-3.jpg";
import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar7 from "@/assets/images/users/avatar-7.jpg";

const EmailRead = () => {
  const [editorHtml, setEditorHtml] = useState(`
    This is an Air-mode editable area.
    <br><br>
    <ul>
      <li>Select a text to reveal the toolbar.</li>
      <li>Edit rich document on-the-fly, so elastic!</li>
    </ul>
    <br>
    End of air-mode area
  `);

  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <div
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="email-read"
        aria-labelledby="email-readLabel"
      >
        <div className="offcanvas-header">
          <div className="d-flex gap-2 align-items-center w-50">
            <a
              href="#"
              role="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <BiArrowBack className="fs-18 align-middle" />
            </a>
            <h5
              className="offcanvas-title text-truncate w-50"
              id="email-readLabel"
            >
              Medium
            </h5>
          </div>

          <div className="ms-auto">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Archive"
              >
                <BiArchive className="fs-18" />
              </button>
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Mark as spam"
              >
                <BiInfoSquare className="fs-18" />
              </button>
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Delete"
              >
                <BiTrash className="fs-18" />
              </button>
            </div>
          </div>
        </div>
        <div className="offcanvas-body p-0 h-100" data-simplebar="true">
          <div className="px-3">
            <div className="mt-2">
              <h5>Hi Jorge, How are you?</h5>

              <hr />

              <div className="d-flex mb-4 mt-1">
                <img
                  className="me-2 rounded-circle avatar-sm"
                  src={avatar2.src}
                  alt="Generic placeholder image"
                />
                <div className="flex-grow-1">
                  <span className="float-end">07:23 AM</span>
                  <h6 className="m-0">Jonathan Smith</h6>
                  <small className="text-muted">
                    From: jonathan@domain.com
                  </small>
                </div>
              </div>

              <p>
                <b>Hi Jorge...</b>
              </p>
              <div className="text-muted">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem.
                </p>
                <p>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                  ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                  eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                  Vivamus elementum semper nisi.
                </p>
                <p>
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar,
                </p>
              </div>

              <hr />

              <h6>
                <BiPaperclip className="mb-2" /> Attachments <span>(3)</span>
              </h6>

              <div>
                <a href="javascript:void(0);">
                  <img
                    src={img1.src}
                    alt="attachment"
                    style={{ height: "84px" }}
                    className="img-thumbnail me-1"
                  />
                </a>
                <a href="javascript:void(0);">
                  <img
                    src={img2.src}
                    alt="attachment"
                    style={{ height: "84px" }}
                    className="img-thumbnail me-1"
                  />
                </a>
                <a href="javascript:void(0);">
                  <img
                    src={img3.src}
                    alt="attachment"
                    style={{ height: "84px" }}
                    className="img-thumbnail me-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="d-flex">
            <img
              className="me-2 rounded-circle avatar-sm"
              src={avatar7.src}
              alt="Generic placeholder image"
            />
            <div className="flex-grow-1">
              <div className="mb-2">
                <ReactQuill
                  value={editorHtml}
                  onChange={handleChange}
                  modules={{
                    toolbar: [
                      [{ font: ["sans-serif", "serif", "monospace"] }],
                      [{ list: "ordered" }, { list: "bullet" }],
                      [{ indent: "-1" }, { indent: "+1" }],
                      [{ direction: "rtl" }],
                      [{ align: ["center", "right"] }],
                      ["link", "image", "video"],
                    ],
                  }}
                  style={{ height: "200px" }}
                  id="snow-editor"
                />
              </div>
            </div>
          </div>

          <div className="text-end">
            <button
              type="button"
              className="btn btn-primary width-sm"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailRead;

import React, { useState } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { BiDotsVerticalRounded, BiTrash } from "react-icons/bi";
import ReactQuill from "react-quill-new";

interface ComposeMailProps {
  show: boolean;
  onHide: () => void;
}

const ComposeMail: React.FC<ComposeMailProps> = ({ show, onHide }) => {
  const [toEmail, setToEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [editorHtml, setEditorHtml] = useState("");

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header className="overflow-hidden bg-primary p-2">
        <Modal.Title className="text-white">New Message</Modal.Title>
        <Button variant="close" className="btn-close-white" onClick={onHide} />
      </Modal.Header>
      <Modal.Body className="p-4">
        <div className="overflow-hidden">
          <Form.Group className="mb-2">
            <Form.Control
              type="email"
              placeholder="To: "
              value={toEmail}
              onChange={(e) => setToEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Group>

          <div className="my-2">
            <ReactQuill
              value={editorHtml}
              onChange={setEditorHtml}
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image", "video"],
                  ["clean"],
                ],
              }}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
                "video",
              ]}
              style={{ height: "200px" }}
            />
          </div>

          <div className="d-flex justify-content-end">
            <Dropdown className="me-1">
              <Dropdown.Toggle variant="light" className="arrow-none">
                <BiDotsVerticalRounded size={18} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Default to full screen</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Label</Dropdown.Item>
                <Dropdown.Item>Plain text mode</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Smart Compose Feedback</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="light" className="compose-close" onClick={onHide}>
              <BiTrash size={18} />
            </Button>
          </div>
          <div className="mt-2">
            <Button variant="primary">Send</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ComposeMail;

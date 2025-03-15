"use client";
import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";
import { initialEvents } from "./data";

const Calendar: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add New Event");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [newEventData, setNewEventData] = useState<any>(null);
  const calendarRef = useRef<FullCalendar>(null);

  const handleEventClick = (info: any) => {
    setModalTitle("Edit Event");
    setSelectedEvent(info.event);
    setModalShow(true);
  };

  const handleSelect = (info: any) => {
    setModalTitle("Add New Event");
    setNewEventData(info);
    setModalShow(true);
  };

  const handleSaveEvent = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      if (selectedEvent) {
        selectedEvent.setProp(
          "title",
          (form.elements.namedItem("title") as HTMLInputElement).value
        );
        selectedEvent.setProp(
          "classNames",
          (form.elements.namedItem("category") as HTMLSelectElement).value
        );
      } else {
        const calendarApi = calendarRef.current?.getApi();
        calendarApi?.addEvent({
          title: (form.elements.namedItem("title") as HTMLInputElement).value,
          start: newEventData.date,
          allDay: newEventData.allDay,
          className: (form.elements.namedItem("category") as HTMLSelectElement)
            .value,
        });
      }
      setModalShow(false);
    } else {
      event.stopPropagation();
      form.classList.add("was-validated");
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      selectedEvent.remove();
      setSelectedEvent(null);
      setModalShow(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-grid">
                <Button
                  variant="primary"
                  onClick={() =>
                    handleSelect({ date: new Date(), allDay: true })
                  }
                >
                  Add New Schedule
                </Button>
              </div>
              <div id="external-events">
                <br />
                <p className="text-muted">
                  Drag and drop your event or click in the calendar
                </p>
                <div
                  className="external-event bg-soft-primary text-primary"
                  data-class="bg-primary"
                >
                  Team Building Retreat Meeting
                </div>
                <div
                  className="external-event bg-soft-info text-info"
                  data-class="bg-info"
                >
                  Product Launch Strategy Meeting
                </div>
                <div
                  className="external-event bg-soft-success text-success"
                  data-class="bg-success"
                >
                  Monthly Sales Review
                </div>
                <div
                  className="external-event bg-soft-danger text-danger"
                  data-class="bg-danger"
                >
                  Team Lunch Celebration
                </div>
                <div
                  className="external-event bg-soft-warning text-warning"
                  data-class="bg-warning"
                >
                  Marketing Campaign Kickoff
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9">
          <div className="card">
            <div className="card-body">
              <FullCalendar
                ref={calendarRef}
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  listPlugin,
                ]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                }}
                height="auto"
                selectable={true}
                editable={true}
                droppable={true}
                eventClick={handleEventClick}
                select={handleSelect}
                initialEvents={initialEvents}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSaveEvent}
            className="needs-validation"
            noValidate
          >
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                name="title"
                required
                defaultValue={selectedEvent?.title}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid event name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                required
                defaultValue={selectedEvent?.classNames[0]}
              >
                <option value="bg-primary">Blue</option>
                <option value="bg-secondary">Gray Dark</option>
                <option value="bg-success">Green</option>
                <option value="bg-info">Cyan</option>
                <option value="bg-warning">Yellow</option>
                <option value="bg-danger">Red</option>
                <option value="bg-dark">Dark</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a valid event category
              </Form.Control.Feedback>
            </Form.Group>
            <div className="row">
              <div className="col-6">
                <Button variant="danger" onClick={handleDeleteEvent}>
                  Delete
                </Button>
              </div>
              <div className="col-6 text-end">
                <Button variant="light" onClick={() => setModalShow(false)}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Calendar;

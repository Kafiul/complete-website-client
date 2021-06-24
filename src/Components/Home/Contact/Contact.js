import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container className="text-center my-4 contact" id="contact">
      <div className="contact-form">
        <h5 style={{ color: "#1CC7C1", fontWeight: "bold" }}>Contact</h5>
        <h3 className="fw-bolder">Let us Build Your Dream</h3>
      </div>
      <div className="formm">
        <div>
          <div className="col-md-7">
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-7 mt-3">
            <Form>
              {" "}
              <Form.Group controlId="formGroupName">
                <Form.Control type="text" placeholder="Enter Full Name" />
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-7 mt-4">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Your messages"
              />
            </Form.Group>
          </div>
        </div>
      </div>
      <Button
        style={{
          backgroundColor: "#1CC7C1",
          border: "none",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        Send Message
      </Button>
    </Container>
  );
};

export default Contact;

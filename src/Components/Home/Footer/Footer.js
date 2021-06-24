import React from "react";
import { Container, Row } from "react-bootstrap";
import { IoMdPin } from "react-icons/io";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="footer text-white"
      style={{ backgroundColor: "#1CC7C1", height: "350px" }}
    >
      <Container className="pt-5">
        <Row>
          <div className="col-md-4 d-flex">
            <IoMdPin className="m-1" />{" "}
            <p>
              #home 002, Shyamoli Kazi office road. <br /> Shyamoli,Dhaka-1207
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Project</li>
              <li>Our Team</li>
              <li>Submit Listing</li>
            </ul>
          </div>
          <div className="col-md-2 ml-2">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>Quick Links</li>
              <li>Our Blog</li>
              <li>Admin</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">About Us</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              neque dolore nisi ipsam itaque laboriosam quae eveniet. Corporis,
              modi ipsa.
            </p>
            <AiFillFacebook style={{ fontSize: "23px" }} />
            <AiFillLinkedin style={{ fontSize: "23px" }} />
            <AiFillInstagram style={{ fontSize: "23px" }} />
          </div>
        </Row>
        <p className="text-center mt-5 pt-5">
          © Interrior, all right reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;

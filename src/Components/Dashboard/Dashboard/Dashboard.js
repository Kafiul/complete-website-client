import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineComment,
} from "react-icons/ai";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/" className="fw-bolder brand-name">
          Interrior
        </Navbar.Brand>
      </Navbar>
      <div className="col-md-2 py-4">
        <ul className="list-unstyled">
          <Link
            to="/booking"
            className="text-decoration-none"
            style={{ color: "#1CC7C1", fontWeight: "bold" }}
          >
            <li className="d-flex">
              <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
              <h6 className="fw-bold list-name">Book Service</h6>
            </li>
          </Link>
          <Link
            to="/bookList"
            className="text-decoration-none"
            style={{ color: "#1CC7C1", fontWeight: "bold" }}
          >
            <li className="d-flex">
              <AiOutlineShopping style={{ fontSize: "20px" }} />
              <h6 className="fw-bold list-name">Service List</h6>
            </li>
          </Link>
          <Link
            to="/review"
            className="text-decoration-none"
            style={{ color: "#1CC7C1", fontWeight: "bold" }}
          >
            <li className="d-flex">
              <AiOutlineComment style={{ fontSize: "20px" }} />
              <h6 className="fw-bold list-name">Review</h6>
            </li>
          </Link>
        </ul>
      </div>
    </Container>
  );
};

export default Dashboard;

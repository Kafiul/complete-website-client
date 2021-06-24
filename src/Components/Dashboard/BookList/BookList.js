import React, { useContext } from "react";
import { Button, Container, Navbar, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineComment,
} from "react-icons/ai";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../firebaseConfig";
import { BiLogOut } from "react-icons/bi";
import { UserContext } from "../../../App";

const BookList = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const handleLogout = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    firebase
      .auth()
      .signOut()
      .then(() => {
        const loggedOutUser = {};
        setLoggedInUser(loggedOutUser);
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/" className="fw-bolder brand-name">
          Interior
        </Navbar.Brand>
      </Navbar>
      <Row>
        {" "}
        <div
          className="col-md-2 py-4 side-bar"
          style={{
            backgroundColor: "#1CC7C1",
          }}
        >
          <ul className="list-unstyled">
            <Link
              to="/booking"
              className="text-decoration-none"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <li className="d-flex">
                <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                <h6 className="fw-bold list-name">Book Service</h6>
              </li>
            </Link>
            <Link
              to="/bookList"
              className="text-decoration-none active"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <li className="d-flex">
                <AiOutlineShopping style={{ fontSize: "20px" }} />
                <h6 className="fw-bold list-name">Service List</h6>
              </li>
            </Link>
            <Link
              to="/review"
              className="text-decoration-none"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <li className="d-flex">
                <AiOutlineComment style={{ fontSize: "20px" }} />
                <h6 className="fw-bold list-name">Review</h6>
              </li>
            </Link>

            <Button className="mt-4 pt-2" onClick={handleLogout}>
              <li className="d-flex">
                <BiLogOut style={{ fontSize: "20px" }} />
                <h6 className="fw-bold list-name">Logout</h6>
              </li>
            </Button>
          </ul>
        </div>
      </Row>
    </Container>
  );
};

export default BookList;

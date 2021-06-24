import React, { useContext, useState } from "react";
import { Container, Navbar, Row, Button, Form } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Booking.css";
import {
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineComment,
} from "react-icons/ai";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../firebaseConfig";
import { BiLogOut } from "react-icons/bi";

const Booking = () => {
  const [reload, setReload] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    service: "",
    cardNumber: "",
    mm: "",
    cvc: "",
  });
  //let { id } = useParams();
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

  const handleBlur = (e) => {
    const newBookingData = { ...bookingData };
    newBookingData[e.target.id] = e.target.value;
    setBookingData(newBookingData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = {
      name: bookingData.name,
      email: bookingData.email,
      service: bookingData.service,
      cardNumber: bookingData.cardNumber,
      mm: bookingData.mm,
      cvc: bookingData.cvc,
    };
    const url = `https://sheltered-springs-17892.herokuapp.com/addBooking`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Data),
    })
      .then((res) => {})
      .catch((err) => alert(err));
    alert("Your Service Successfully Booked!! Thank You !!");
    setReload(true);
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Container>
      {reload && <Redirect to="/"></Redirect>}
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
        <div className="col-md-7">
          <h5 className="fw-bold">Book</h5>
          <div>
            <Form className="reg-form">
              <Form.Group>
                <Form.Control
                  onChange={(e) => handleBlur(e)}
                  value={bookingData.name}
                  id="name"
                  type="text"
                  placeholder="Enter name"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  onChange={(e) => handleBlur(e)}
                  value={bookingData.email}
                  id="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  onChange={(e) => handleBlur(e)}
                  value={bookingData.service}
                  id="service"
                  type="text"
                  placeholder="Enter Service name"
                />
              </Form.Group>

              <p className="my-2">Pay with - Credit Card</p>
              <Form.Group>
                <Form.Control
                  onChange={(e) => handleBlur(e)}
                  value={bookingData.cardNumber}
                  id="cardNumber"
                  type="number"
                  placeholder="Card number"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  onChange={(e) => handleBlur(e)}
                  value={bookingData.mm}
                  id="mm"
                  type="number"
                  placeholder="MM/YY"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  onChange={(e) => handleBlur(e)}
                  value={bookingData.cvc}
                  id="cvc"
                  type="number"
                  placeholder="CVC"
                />
              </Form.Group>
              <p className="my-3">Your Service Charge will be </p>
              <Button
                onClick={(e) => handleSubmit(e)}
                style={{
                  backgroundColor: "#1CC7C1",
                  border: "none",
                }}
              >
                Pay
              </Button>
            </Form>
          </div>
        </div>
        <div className="col-md-3">
          {loggedInUser?.email || loggedInUser?.name ? (
            <div>
              <p className="m-2 mx-2">{loggedInUser?.name}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </Row>
    </Container>
  );
};

export default Booking;

import React, { useContext, useState } from "react";
import { Container, Form, Navbar, Row, Button } from "react-bootstrap";
import { UserContext } from "../../../App";
import {
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineComment,
} from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link, Redirect, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../firebaseConfig";

const Review = () => {
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
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [show, setShow] = useState(false);

  const [data, setData] = useState({
    name: "",
    company: "",
    description: "",
  });
  const handleBlur = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      name: data.name,
      company: data.company,
      description: data.description,
    };
    const url = `https://sheltered-springs-17892.herokuapp.com/addReview`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => alert(err));
    setShow(true);
  };

  return (
    <Container>
      {show && <Redirect to="/booking"></Redirect>}
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/" className="fw-bolder brand-name">
          Interrior
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
              to="/reiew"
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
          <h5 className="fw-bold">Review</h5>
          <div>
            <Form className="reg-form">
              <Form.Group>
                <Form.Control
                  id="name"
                  onChange={(e) => handleBlur(e)}
                  value={data.name}
                  type="text"
                  placeholder="Enter name"
                />
              </Form.Group>
              <br />

              <Form.Group>
                <Form.Control
                  id="company"
                  onChange={(e) => handleBlur(e)}
                  value={data.company}
                  type="text"
                  placeholder="Enter company name"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  as="textarea"
                  id="description"
                  onChange={(e) => handleBlur(e)}
                  value={data.description}
                  rows={5}
                  placeholder="Description"
                />
              </Form.Group>
              <Button
                onClick={(e) => handleSubmit(e)}
                style={{
                  backgroundColor: "#1CC7C1",
                  border: "none",
                  marginTop: "15px",
                }}
              >
                Submit
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

export default Review;

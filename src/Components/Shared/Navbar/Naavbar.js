import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Naavbar.css";
import { UserContext } from "../../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../firebaseConfig";

const Naavbar = () => {
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
    <div>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to="/" className="fw-bolder brand-name">
            Interrior
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-class">
              <Nav.Link as={Link} to="/" className="fw-bolder mx-4 link-name">
                Home
              </Nav.Link>
              <Nav.Link href="#project" className="fw-bold mx-4 link-name">
                Projects
              </Nav.Link>
              <Nav.Link href="#service" className="fw-bold mx-4 link-name">
                Services
              </Nav.Link>
              <Nav.Link href="#contact" className="fw-bold mx-4 link-name">
                Contact
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/admin"
                className="fw-bold mx-4 link-name"
              >
                Admin
              </Nav.Link>
              {loggedInUser?.name || loggedInUser.email ? (
                <Button
                  className="button"
                  onClick={handleLogout}
                  style={{
                    backgroundColor: "#1CC7C1",
                    border: "none",
                    width: "85px",
                    marginTop: "5px",
                    marginLeft: "100px",
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button
                    className="button"
                    style={{
                      backgroundColor: "#1CC7C1",
                      border: "none",
                      width: "85px",
                      marginTop: "5px",
                      marginLeft: "100px",
                    }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Naavbar;

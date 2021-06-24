import React, { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Naavbar from "../Shared/Navbar/Naavbar";
import { FcGoogle } from "react-icons/fc";
import "./Registration.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
const Registration = () => {
  const history = useHistory();
  let location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        console.log(token);
        //The signed-in user info.
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        console.log(user);
        setLoggedInUser({
          name: name,
          email: email,
        });
        console.log(loggedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        alert(errorCode, errorMessage, email);
        // The firebase.auth.AuthCredential type that was used.
        //var credential = error.credential;

        // ...
      });
  };

  const handleRegister = () => {
    alert("This feature will available soon!! Use GoogleSign now");
  };
  return (
    <div>
      <Naavbar />
      <Container>
        <div className="p-4 d-flex justify-content-center align-items-center">
          <Form className="reg-form">
            <h3>Create New Account</h3>
            <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              onClick={handleRegister}
              style={{
                marginTop: "20px",
                backgroundColor: "#1CC7C1",
                border: "none",
              }}
            >
              Create New Account
            </Button>
          </Form>
        </div>
        <div className="text-center">
          <p className="text-center">or</p>
          <Button
            variant="outline-success"
            onClick={handleGoogleSignIn}
            className="my-2"
            style={{ border: "1px solid #1CC7C1", borderRadius: "25px" }}
          >
            <FcGoogle style={{ fontSize: "25px", marginRight: "15px" }} />{" "}
            Continue with Gmail
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Registration;

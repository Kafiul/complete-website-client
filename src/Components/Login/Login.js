import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { Button, Container, Navbar } from "react-bootstrap";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import login from "../../Image/login.jpg";
import "./Login.css";

const Login = () => {
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
        const credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        // eslint-disable-next-line no-unused-vars
        const token = credential.accessToken;
        //console.log(token);
        // The signed-in user info.
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        //console.log(user);
        setLoggedInUser({
          name: name,
          email: email,
        });
        console.log(loggedInUser);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorCode, errorMessage, email, credential);
        // ...
      });
    console.log(loggedInUser);
  };

  return (
    <div>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to="/" className="fw-bolder brand-name">
            Interrior
          </Navbar.Brand>
        </Navbar>
        <div className="d-flex mt-4 login-page">
          {" "}
          <div className="col-md-4">
            <img
              src={login}
              alt="login"
              className="img-fluid"
              style={{ width: "100%", height: "100%" }}
              f
            />
          </div>
          <div className="text-center mt-5 py-5 col-md-7">
            <h3>Login With</h3>
            <Button
              onClick={handleGoogleSignIn}
              variant="outline-success"
              className="my-3"
              style={{ border: "1px solid #1CC7C1", borderRadius: "25px" }}
            >
              <FcGoogle style={{ fontSize: "25px", marginRight: "15px" }} />{" "}
              Continue with Gmail
            </Button>
            <p className="text-center mt-4">
              Don't have an account?
              <span>
                <Link to="/registration"> Create New Account</Link>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;

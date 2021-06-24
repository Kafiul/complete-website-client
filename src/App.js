import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Booking from "./Components/Dashboard/Booking/Booking";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Review from "./Components/Dashboard/Review/Review";
import BookList from "./Components/Dashboard/BookList/BookList";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <PrivateRoute path="/booking">
            <Booking />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/bookList">
            <BookList />
          </PrivateRoute>
          <Route path="*">
            <h2 className="text-center py-5">Error 404 - Page Not Found</h2>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

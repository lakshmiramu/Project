// import UserContext from "../../context-api/loginContext";
// import RecipeApp from "../recipe-app/RecipeApp";
// import Home from "../home/Home";
// import RecipeAdd from "../recipe-add/RecipeAdd";
// import Login from "../login/Login";
import React, { useContext } from "react";
import{ BrowserRouter as Router,Route,Link} from 'react-router-dom';
import UserContext from "../../context-api/loginContext";
import {Switch} from 'react-router';
import Login from "../home/Login";
import Home from "../home/Home";
import Register from "../home/Register";
import Contact from "../home/Contact";
import { UserConsumer } from "../../context-api/UserContext";
import UserContext from "../../context-api/UserContext";

const Navbar1 = props => {
  const { state, dispatch } = useContext( UserContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-success">
        <Link className="navbar-brand" to="/">
          Welcome.....
        </Link>

        {state.login ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  Register 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>

              <div
                className="nav-item"
                style={{ marginLeft: "800px" }}
                onClick={() => {
                  dispatch({ type: "logout" });
                }}
              >
                <li className="nav-link">Logout</li>
              </div>
            </ul>
          </div>
        ) : (
          <ul className="navbar-nav mr-auto">
            <li style={{ marginLeft: "1000px" }} className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        )}
      </nav>
      {state.login ? (
        <>
          <Route exact path="/" component={Home} />

          <Route path="/login" component={Login} />
          {/* <Route exact path="/add" component={RecipeAdd} />
          <Route exact path="/show" component={RecipeApp} /> */}
        </>
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/login" component={Login} />
          <Route path="*" component={Home} />
        </Switch>
      )}
    </>
  );
};

export default Navbar1;

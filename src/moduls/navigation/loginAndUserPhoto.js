import React, { useContext } from "react";
import NavBar from "../../signUp/nav-bar";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import Context from "../../store/context"

export default function LoginAndUserPhoto() {
  const { isAuthenticated } = useAuth0();
  const context = useContext(Context);

  //this is for @media navbar
  const click = context.navbarOpen;
  const handleClick = () => context.navbarOpenHandler(!click);

  const { user } = useAuth0();
  return (
    <>
      <li className="nav-item">
        <NavLink
          exact
          to="/wishForm"
          activeclassname="active"
          className="nav-links"
          onClick={handleClick}
        >
          <NavBar/>{/* login and logout buttons */}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeclassname="active"
          className="nav-links"
          to="/personalPage"
          onClick={handleClick}>
          {isAuthenticated ? (
            <img
              className="navbar-personal-photo"
              alt="Me"
              src={user.picture}
            />
          ) : null}
        </NavLink>
      </li>
    </>
  );
}

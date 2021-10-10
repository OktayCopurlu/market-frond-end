import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  return (
    <div className="m-5 py-5 text-center">
      <h3>
        404 - <code>{location.pathname}</code> is Not Found
      </h3>
      <h4>
        Click to the
        <Link className="text-decoration-none text-success" exact to="/">
          Home Page
        </Link>
      </h4>
    </div>
  );
}

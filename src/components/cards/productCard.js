import React, { useState } from "react";
import Slider from "../slider";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProductCard(props) {
  const element = props.element;

  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [readMore, setReadMore] = useState(false); //for more information

  return (
    <div key={element._id} className="product-div">
      {element.photos.length > 0 ? (
        <Slider photos={element.photos} />
      ) : (
        <img
        className="images mb-2"
          alt="no photos"
          src="https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
        />
      )}
      <div className="product-detail">
        <div className="d-flex justify-content-between mb-0">
          <Link
            className="product-title"
            to="#"
            onClick={() => setReadMore(!readMore)}
          >
            {element?.title}
          </Link>
          <p className="card-text ">{element.canton}</p>
        </div>
        {readMore ? (
          <>
            <p className="product-condition"> {element.condition}</p>
            <p className=" m-0">{element.category}</p>
            <p className=" m-0">
              {element.size ? "Size:" : null} {element.size}
            </p>
            <p className="card-text m-0">
              {element.dimensions ? "Dimensions:" : null}
              {element.dimensions}
            </p>
            <p className="card-text mt-1">{element.detail}</p>
            <p className="card-text ">
              {element.canton}, {element.city}
            </p>
          </>
        ) : null}
        {isAuthenticated ? (
          <>
            <Link to="#" className="text-info d-block">
              <i className="fas fa-phone"></i> {element.contactTel}
            </Link>
            <Link to="#" className="text-info d-block">
              <i className="fas fa-envelope"></i> {element.contactEmail}
            </Link>
          </>
        ) : (
          <Link
            to="/SignUp"
            onClick={() =>
              loginWithRedirect({
                screen_hint: "signup",
              })
            }
            className="text-danger">
            Please SignUp to see contact information.
          </Link>
        )}
      </div>
    </div>
  );
}

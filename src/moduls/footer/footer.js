import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted">
      <section className="pt-1">
        <div className=" text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>FreeMarket
              </h6>
              <div>
                <a
                  href="https://www.facebook.com/oktay.copurlu"
                  rel="noreferrer"
                  target="_blank"
                  className="me-4 text-reset mr-3"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/Oktay18521974"
                  rel="noreferrer"
                  target="_blank"
                  className="me-4 text-reset mr-3"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/swissoktay/"
                  rel="noreferrer"
                  target="_blank"
                  className="me-4 text-reset"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">
              <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
              <p>
                <Link to="/history" className="text-reset">
                  History
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <Link className="contact-link" to="/email">
                <i className="fas fa-envelope me-3 mb-2"></i>
                info@freemarket.com
              </Link>
              <p>
                <i className="fas fa-phone me-3"></i> + 41 00 000 00 00
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="footerBottom bg-info text-light text-center p-4">
        © 2021 Copyright:
        <span className="text-reset fw-bold"> Oktay</span>
      </div>
    </footer>
  );
}

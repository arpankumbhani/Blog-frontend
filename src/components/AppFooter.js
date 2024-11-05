import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./AppFooter.css";

export default function AppFooter() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted mt-5">
        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
          style={{ backgroundColor: "#d7e4fd" }}
        >
          <div className="me-5 d-none d-lg-block text-center">
            <span>Get connected with us on social networks</span>
          </div>
          <div className="">
            <a href="/" className="me-4 text-reset">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=9VdFCP6nC-g&ab_channel=CarryMinati"
                className="youtube social"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </a>
            <a href="/" className="me-4 text-reset">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/Arpan Patel/"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </a>
            <a href="/" className="me-4 text-reset">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.twitter.com/Arpan kumbhani"
                className="twitter social"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </a>
            <a href="/" className="me-4 text-reset">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/arpankumbhani"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </a>
          </div>
        </section>
        <section className="" style={{ backgroundColor: "#d7e4fd" }}>
          <div className="container text-center text-md-start">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 mt-3">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p className="paragraph">
                  <b>The Look Agency</b>
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-3">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p className="paragraph">
                  <a href="" className="text-reset">
                    Magento
                  </a>
                </p>
                <p className="paragraph">
                  <a href="" className="text-reset">
                    React
                  </a>
                </p>
                <p className="paragraph">
                  <a href="" className="text-reset">
                    PHP
                  </a>
                </p>
                <p className="paragraph">
                  <a href="" className="text-reset">
                    javascript
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-3">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p className="paragraph">
                  <a href="" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p className="paragraph">
                  <a href="" className="text-reset">
                    Settings
                  </a>
                </p>
                <p className="paragraph">
                  <a href="" className="text-reset">
                    Orders
                  </a>
                </p>
                <p className="paragraph">
                  <a href="" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-3">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p className="paragraph">
                  <i className="fas fa-home me-3"></i> 701,City center 2,
                  Science city, sola, A’bad - 380060, India
                </p>
                <p className="paragraph">
                  <i className="fas fa-envelope me-3"></i>
                  info@thelookagency.com
                </p>
                <p className="paragraph">
                  <i className="fas fa-phone me-3"></i> +91 9856516565
                </p>
                <p className="paragraph">
                  <i className="fas fa-print me-3"></i> +91 7895468512
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "#6272d1" }}>
          © 2021 Copyright:
          <a
            className="text-reset fw-bold"
            href="https://tla-hrm.thelookagency.in/home"
          >
            Thelookagency.com
          </a>
        </div>
      </footer>
    </div>
  );
}

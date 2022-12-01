import React from "react";
import NavbarComponent from "../component/NavbarComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div>
      <NavbarComponent nText="Contact" />
      <div classNameNameName="container container-lg">
        <div className="px-4 py-5 my-5 text-center border-bottom">
          <img
            className="d-block mx-auto mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZ_cZ6cdJ5D3Eq1euwXiqPpYLdLBzuPvw_g&usqp=CAU"
            alt=""
            width="96"
            height="96"
          />
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <div className="col-lg-6 mx-auto">
            <h3 className="text-secondary my-5">
              Untuk keperluan mengenai website ini dapat menghubungi kontak di bawah ini:
            </h3>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <a href="https://github.com/" style={{color: "black"}}><FontAwesomeIcon icon={faGithub} className="fa-3x"/></a>
              <a href="https://www.instagram.com/" style={{color: "black"}}><FontAwesomeIcon icon={faInstagram} className="fa-3x"/></a>
              <a href="https://www.linkeidn.com/" style={{color: "black"}}><FontAwesomeIcon icon={faLinkedin} className="fa-3x"/></a>
              <a href="https://www.facebook.com/" style={{color: "black"}}><FontAwesomeIcon icon={faFacebook} className="fa-3x"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

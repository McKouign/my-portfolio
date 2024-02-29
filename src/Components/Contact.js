import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactImg from "../Assets/images/contact-img.svg";
import navIcon1 from "../Assets/images/linkedin.png";
import navIcon2 from "../Assets/images/github.png";
import navIcon3 from "../Assets/images/instagram.png";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <div className="contact-flex-container">
          <div className="contact-image">
            <img src={ContactImg} alt="Contact me" />
          </div>
          
          <div className="contact-info">
            <div className="social-icon mb-3">
                <a href="https://www.linkedin.com/in/romainln/" target="_blank">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/McKouign" target="_blank">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.instagram.com/mckouign/" target="_blank">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            <h2>My contact details</h2>
            <p>
              <strong>Email :</strong> romain.le.neindre@gmail.com
            </p>
            <p>
              <strong>Tel :</strong> +33 6 10 42 56 27
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

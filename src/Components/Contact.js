import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactImg from "../Assets/images/contact-img.svg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <div className="contact-flex-container">
          <div className="contact-image">
            <img src={ContactImg} alt="Contact me" />
          </div>
          <div className="contact-info">
            <h2>Mes coordonnées</h2>
            <p>
              <strong>Email:</strong> romain.le.neindre@gmail.com
            </p>
            <p>
              <strong>Téléphone:</strong> +33 6 10 42 56 27
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

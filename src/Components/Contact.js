import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactImg from "../Assets/images/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Envoyer");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message envoyé avec succès." });
    } else {
      setStatus({
        succes: false,
        message: "Une erreur s'est produite. Merci de réessayer plus tard.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={ContactImg} alt="Contact me" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                ></input>
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                ></input>
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="E-Mail"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                ></input>
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Phone"
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                ></input>
              </Col>
              <Col row="6">
                <textarea
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>
                <button type="submit">
                  <span>{buttonText}</span>
                </button>
              </Col>
              {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

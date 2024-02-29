import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../Components/ProjectCard";
import Betfriends from "../Assets/images/bf-pic.jpeg";
import Togotosleep from "../Assets/images/togotosleep.jpg";
import Peurdeconduire from "../Assets/images/pdc-pic.jpeg";
import colorSharp2 from "../Assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Betfriends",
      description: "Sports betting web app with friends",
      imgUrl: Betfriends,
      linkUrl: "https://github.com/McKouign/BetFriends",
    },
    {
      title: "ToGoToSleep",
      description:
        "Discounted hotel room reservation platform",
      imgUrl: Togotosleep,
      linkUrl: "https://github.com/McKouign/ToGoToSleep",
    },
    {
      title: "Peurdeconduire.fr",
      description:
        "Coaching service for people with driving phobias, my old job.",
      imgUrl: Peurdeconduire,
      linkUrl: "https://peurdeconduire.fr",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    My journey in the world of web development, although recent, is already marked by significant and varied projects, each reflecting a key stage in my learning and professional growth. 
                  </p>

                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

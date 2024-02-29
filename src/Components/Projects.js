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
      title: "ToGoToSleep",
      description:
        "Plateforme de réservation de chambres d'hotel à prix réduits",
      imgUrl: Togotosleep,
      linkUrl: "https://github.com/McKouign/ToGoToSleep",
    },
    {
      title: "Betfriends",
      description: "Web app de paris sportifs entre amis",
      imgUrl: Betfriends,
      linkUrl: "https://github.com/McKouign/BetFriends",
    },
    {
      title: "Peurdeconduire.fr",
      description:
        "Service de coaching pour personnes phobiques de la conduite automobile",
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
                  <h2>Projets</h2>
                  <p>
                    Mon parcours dans le monde du développement web, bien que
                    récent, est déjà marqué par des projets significatifs et
                    variés, chacun reflétant une étape clé de mon apprentissage
                    et de ma croissance professionnelle. 
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

import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
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
      description: "Web app de paris sportifs entre amis",
      imgUrl: Betfriends,
    },
    {
      title: "ToGoToSleep",
      description:
        "Plateforme de réservation de chambres d'hotel à prix réduits",
      imgUrl: Togotosleep,
    },
    {
      title: "Peurdeconduire.fr",
      description:
        "Service de coaching pour personnes phobiques de la conduite automobile",
      imgUrl: Peurdeconduire,
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
                    et de ma croissance professionnelle. Mon premier projet
                    majeur, est une application web de paris sportif entre amis.
                    Ce projet, à la fois stimulant et ludique, m'a plongé dans
                    les défis captivants du travail collaboratif et du
                    développement interactif. Le deuxième projet, entrepris
                    après ma formation, représente une évolution dans mes
                    compétences et ma confiance en tant que développeur. C'était
                    une expérience enrichissante qui m'a permis de consolider
                    mes compétences acquises et d'explorer de nouvelles avenues
                    en développement web. Le dernier, quant à lui, fut réalisé
                    sur WordPress il yb a 3 ans. Il s'agit du site de mon
                    ancienne activité professionnelle et c'est en le
                    construisant que j'ai découvert mon amour pour la création
                    de solutions web, un domaine où chaque ligne de code est une
                    opportunité pour innover et faire la différence. Chacun de
                    ces projets est un témoignage de mon évolution, de mon
                    engagement et de mon enthousiasme pour les défis techniques
                    et créatifs du développement web.
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

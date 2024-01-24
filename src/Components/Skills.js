import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import LoadingImage from "../Assets/images/loading.png";
import ColorSharp1 from "../Assets/images/color-sharp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>"L'excellence n'est pas une compétence, mais une attitude."</p>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <span className="tagline">Développement Back-end</span>
                  <ul>
                    <li>Ruby on Rails</li>
                    <li>Node.js</li>
                    <li>SQL, PostgreSQL & Active Record</li>
                    <li>Background tasks & jobs</li>
                  </ul>
                </div>
                <div className="item">
                  <span className="tagline">Développement Front-end</span>
                  <ul>
                    <li>HTML & CSS</li>
                    <li>JavaScript, React & Stimulus</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="item">
                  <span className="tagline">Autres compétences</span>
                  <ul>
                    <li>Figma</li>
                    <li>Github</li>
                    <li>Heroku</li>
                    <li>Figma</li>
                  </ul>
                </div>
                <div className="item">
                  <span className="tagline">Soft Skills</span>
                  <ul>
                    <li>Autonomie</li>
                    <li>Adaptabilité</li>
                    <li>Travail en équipe</li>
                    <li>Goût pour l'apprentissage</li>
                  </ul>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={ColorSharp1} />
    </section>
  );
};

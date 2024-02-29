import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      breakpoint: { max: 800, min: 0 },
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
              <p>"Excellence is not a skill but an attitude."</p>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <div className="title-list-container">
                    <h5>Back-End development</h5>
                    <ul>
                      <li>Ruby on Rails</li>
                      <li>Node.js</li>
                      <li>Next.js</li>
                      <li>background tasks & jobs</li>
                      <li>MVC</li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="title-list-container">
                    <h5>Front-End develoment</h5>
                    <ul>
                      <li>HTML & CSS</li>
                      <li>JavaScript, React & Stimulus</li>
                      <li>Bootstrap & librairies</li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="title-list-container">
                    <h5>DataBase</h5>
                      <li>APIs</li>
                      <li>SQL & Active Record</li>
                      <li>PostgreSQL & SQLite</li>
                    <ul>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="title-list-container">
                    <h5>Other hard skills</h5>
                    <ul>
                      <li>Version control/Git</li>
                      <li>Figma</li>
                      <li>Heroku</li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="title-list-container">
                    <h5>Soft skills</h5>
                    <ul>
                      <li>Autonomy</li>
                      <li>Adaptability</li>
                      <li>Team Work</li>
                      <li>Taste for learning</li>
                    </ul>
                  </div>
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

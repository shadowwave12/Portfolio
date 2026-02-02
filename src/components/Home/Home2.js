import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              I’m a software engineer focused on turning ideas into reliable,
              scalable applications. Over time, I’ve worked with multiple
              technologies and developed a strong interest in building
              performant systems and clear, user-focused interfaces.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple"> JavaScript,Python, Node.js, and Java </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple"> Web Applications </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">ohter frameworks</b>.
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

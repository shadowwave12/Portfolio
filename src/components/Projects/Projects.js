import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import wandR from "../../Assets/Projects/wandR.png";
import rustcompressor from "../../Assets/Projects/rustcompressor.png";
import GlobalBackground from "../GlobalBackground";
import GPT from "../../Assets/Projects/GPT.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <GlobalBackground />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wandR}
              isBlog={false}
              title="wandR"
              description="A Rental App"
              ghLink="https://github.com/shadowwave12/Wandr"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rustcompressor}
              isBlog={false}
              title="Rust Compressor-CLI"
              description="A compressor that compresses file"
              ghLink="https://github.com/shadowwave12/rust-compressor-cli"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GPT}
              isBlog={false}
              title="GPT"
              description="An LLM to chat."
              ghLink="https://github.com/shadowwave12/frontend-GPT"
              demoLink="https://frontend-gpt-sjhc.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

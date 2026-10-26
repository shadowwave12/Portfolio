import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import yt_rag from "../../Assets/Projects/yt_rag.png";
import cloudburst from "../../Assets/Projects/cloudburst.png";
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
              imgPath={yt_rag}
              isBlog={false}
              title="RAG based Youtube Learning Assistant"
              description="This is a working YouTube question-answering application. It downloads a video's transcript, splits it into searchable pieces, creates vector embeddings, retrieves the pieces related to a question, and asks a configured LLM to answer from that context."
              ghLink="https://github.com/shadowwave12/Youtube_assistant"
              demoLink="https://yt-assistant-omega.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudburst}
              isBlog={false}
              title="AI based Cloudburst Prediction"
              description="AI-powered Cloudburst Risk Prediction System"
              ghLink="https://github.com/BtechFinalYear/cloudburst-ai"
              demoLink="https://cloudburst-ai.onrender.com/"
            />
          </Col>
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
                <b className="purple">
                  {" "}
                  AI/ML, Python, Javascript, Node.js, and Java{" "}
                </b>
              </i>
              — and I enjoy working across Gen-AI, Agentic-Ai, backend and
              frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple"> LLM based Web Applications </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects related to
              <b className="purple"> Agentic AI & Gen AI </b>, modern frameworks
              like{" "}
              <i>
                <b className="purple">Langchain, Langgraph</b> and{" "}
                <b className="purple">other frameworks</b>.
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

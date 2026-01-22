import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I’m{" "}
            <span className="purple">Purushotam Kumar Rauniyar</span> from{" "}
            <span className="purple">
              Nepal currently staying at visakhapatnam
            </span>
            .
            <br />
            {/* I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Juspay</span>. */}
            <br />
            I’m a final-year{" "}
            <span className="purple">B.Tech Computer Science student</span>{" "}
            studying in <span className="purple">Andhra University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focused on building solutions that create meaningful impact."{" "}
          </p>
          <footer className="blockquote-footer">Purushotam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

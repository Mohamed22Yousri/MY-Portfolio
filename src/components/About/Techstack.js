import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbHtml } from "react-icons/tb";
import { IoLogoVue } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiVuetify } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";
import { SiVite } from "react-icons/si";

import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { MdCss } from "react-icons/md";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbHtml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdCss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript style={{ color: "black", background: "white" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVue />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuetify />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;

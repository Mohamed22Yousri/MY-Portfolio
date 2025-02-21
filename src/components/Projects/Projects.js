import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PFood from "../../Assets/Projects/FMS.PNG";
import alaraby from "../../Assets/Projects/elarby-eccomerce.PNG";
import store from "../../Assets/Projects/store.PNG";
import hms from "../../Assets/Projects/hms.PNG";
import quiz from "../../Assets/Projects/quizz.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={PFood}
              isBlog={false}
              title=" Food Management System"
              description="A web platform with Admin and User portals for managing and browsing recipes, build with React, React-router-dom, Vit, Bootstrap, jwt-decode, axios. Deployment with Netlify"
              ghLink="https://github.com/Mohamed22Yousri/Food-project.React"
              demoLink="https://food-system-vit-js.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alaraby}
              isBlog={false}
              title="Alaraby E-commerce"
              description="Designed and developed a scalable online store for selling laptops, mobile phones, and electronic appliances. The platform provides a seamless shopping experience where users can browse products, add items to their cart, and complete purchases easily."
              ghLink="https://github.com/Mohamed22Yousri/elaraby-eccomerce"
              demoLink="https://gleaming-torrone-009c9e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="E-commerce Store"
              description="Built an interactive online store using React and Bootstrap for selling men’s, women’s, and kids’ clothing. The platform offers smooth shopping experience with user-friendly interface, allowing customers browse categories, add items to cart."
              ghLink="https://github.com/Mohamed22Yousri/E_Commercce"
              demoLink="https://curious-semifreddo-99c0e3.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="Hotel Management System"
              description="Tech Stack: React, MUI, Stripe, GitHub, Figma RESTful APIs, Toastify, jwt  Overview: Developed a comprehensive Hotel Management System in collaboration with a team, offering seamless hotel management and an excellent user experience."
              ghLink="https://github.com/Mohamed22Yousri/Hotels-System"
              demoLink="https://hotelssystem.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="Tech Stack: React, Vite, React Router Dom, React Hook Form, Axios, JWT decode, React Toastify, Bootstrap, Chart.js, Framer Motion, Netlify.Overview:An interactive quiz system for seamless quiz creation and participation secure authentication."
              ghLink="https://github.com/Mohamed22Yousri/QuizApp"
              demoLink="https://quizwiz1app.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

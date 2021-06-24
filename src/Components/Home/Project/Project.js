import React from "react";
import project1 from "../../../Image/project1.jpg";
import project2 from "../../../Image/project2.jpg";
import project3 from "../../../Image/project3.jpg";
import { Container } from "react-bootstrap";
import ProjectDetails from "./ProjectDetails";
import "./Project.css";

const Project = () => {
  const projects = [
    {
      img: project1,
      title: "Luxary villa on lago Park",
      location: "Dhaka, Bangladesh",
    },
    {
      img: project2,
      title: "Luxary villa on lago Park",
      location: "Dhaka, Bangladesh",
    },
    {
      img: project3,
      title: "Luxary villa on lago Park",
      location: "Dhaka, Bangladesh",
    },
  ];
  return (
    <Container className="mt-5 project" id="project">
      <div className="text-center py-3">
        <h5 style={{ color: "#1CC7C1", fontWeight: "bold" }}>Projects</h5>
        <h3 className="fw-bolder">Discover the latest Interrior Design</h3>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectDetails key={project.img} project={project} />
        ))}
      </div>
    </Container>
  );
};

export default Project;

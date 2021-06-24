import React from "react";
import "./Services.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon1 from "../../../Image/Icon/icon1.png";
import icon2 from "../../../Image/Icon/icon2.png";
import icon3 from "../../../Image/Icon/icon3.png";
import ServicesDetails from "./ServicesDetails";

const Services = () => {
  const services = [
    { id: 1, icon: icon1, title: "Office Interrior Design", price: "$300" },
    { id: 2, icon: icon2, title: "Showroom Interrior Design", price: "$500" },
    {
      id: 3,
      icon: icon3,
      title: "Residential Interrior Design",
      price: "$800",
    },
  ];
  return (
    <Container className="mt-5 py-4 text-center" id="service">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1", fontWeight: "bold" }}>Services</h5>
        <h3 className="fw-bolder">
          We are an agency tailored to all
          <br /> clients' needs that always delivers
        </h3>
      </div>
      <div className="row">
        {services.map((service) => (
          <ServicesDetails key={service.icon} service={service} />
        ))}
      </div>
      <Link to="/booking">
        <Button
          style={{
            backgroundColor: "#1CC7C1",
            border: "none",
          }}
        >
          Explore More
        </Button>
      </Link>
    </Container>
  );
};

export default Services;

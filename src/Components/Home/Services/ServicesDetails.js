import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const ServicesDetails = (props) => {
  const { icon, title, price, id } = props.service;
  return (
    <div className="col-md-4 my-4 d-flex justify-content-center">
      <Link to={`booking/${id}`} className="link">
        <Fade bottom>
          <Card
            style={{ width: "19rem", border: "none" }}
            className="shadow service-box"
          >
            <Card.Body className="text-center">
              <img
                src={icon}
                alt="icon"
                style={{ height: "70px" }}
                className="service-img"
              />
              <Card.Title className="mt-2 fw-bold">{title}</Card.Title>
              <Card.Title className="mt-2 fw-bold">{price}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                molestiae unde quia provident modi pariatur nam corrupti atque
                vel dignissimos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Fade>
      </Link>
    </div>
  );
};

export default ServicesDetails;

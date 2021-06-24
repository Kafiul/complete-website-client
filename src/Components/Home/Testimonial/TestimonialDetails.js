import React from "react";
import { Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import person3 from "../../../Image/person3.png";
import Slide from "react-reveal/Slide";

const TestimonialDetails = (props) => {
  const { name, company, description } = props.testimonial;
  return (
    <div className="col-md-4 my-3 d-flex justify-content-center">
      <Slide right>
        <Card style={{ width: "19rem", border: "none" }} className="shadow">
          <Card.Body className="text-center">
            <div className="d-flex">
              {" "}
              <img src={person3} alt="icon" style={{ height: "35px" }} />
              <div className="mx-3">
                <Card.Title className="mt-2 fw-bold">{name}</Card.Title>
                <Card.Title className="fw-bold">{company}</Card.Title>
              </div>
            </div>
            <Card.Text className="text-center">
              <p>{description}</p>
              <AiFillStar style={{ color: "gold" }} />
              <AiFillStar style={{ color: "gold" }} />
              <AiFillStar style={{ color: "gold" }} />
              <AiFillStar style={{ color: "gold" }} />
              <AiFillStar style={{ color: "gold" }} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Slide>
    </div>
  );
};

export default TestimonialDetails;

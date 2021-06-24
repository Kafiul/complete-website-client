import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TestimonialDetails from "./TestimonialDetails";
import "./Testimonial.css";

const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-springs-17892.herokuapp.com/review")
      .then((response) => response.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#F6F6F6" }} className="main-div pb-2">
      <Container>
        <h4
          className="pt-5 fw-bold text-center"
          style={{ color: "#1CC7C1", fontWeight: "bold" }}
        >
          Testimonials
        </h4>
        <div className="row mb-2">
          {review.map((testimonial) => (
            <TestimonialDetails
              key={testimonial?._id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;

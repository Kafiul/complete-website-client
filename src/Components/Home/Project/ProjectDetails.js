import React from "react";
import { IoMdPin } from "react-icons/io";

const ProjectDetails = (props) => {
  const { title, img, location } = props.project;
  const locationStyle = {
    marginTop: "-4px",
    marginLeft: "5px",
  };
  return (
    <div className="col-md-4 mt-3">
      <div>
        <img
          src={img}
          alt="design"
          style={{ height: "250px", width: "100%" }}
        />
      </div>
      <div className="text-center mt-3">
        <h5>{title}</h5>
        <div className="d-flex justify-content-center">
          <IoMdPin />
          <p style={locationStyle}>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

import React from "react";

function CourseCard({ title, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
        <div className="card-footer bg-white border-0">
          <button className="btn btn-primary w-100">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
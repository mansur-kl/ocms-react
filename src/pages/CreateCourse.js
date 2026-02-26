import React from "react";
import Navbar from "../components/Navbar";

function CreateCourse() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2>Create Course</h2>

        <input className="form-control mb-3" placeholder="Course Title" />
        <textarea
          className="form-control mb-3"
          placeholder="Course Description"
        ></textarea>

        <button className="btn btn-success">Create</button>
      </div>
    </>
  );
}

export default CreateCourse;
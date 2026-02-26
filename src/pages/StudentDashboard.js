import React from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

function StudentDashboard() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2 className="fw-bold mb-4">Student Dashboard</h2>

        <div className="row">
          <CourseCard
            title="React Development"
            description="You are enrolled in this course."
          />
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
import React from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Admin Dashboard</h2>
          <Link to="/create-course" className="btn btn-success">
            + Create Course
          </Link>
        </div>

        <div className="row">
          <CourseCard
            title="React Development"
            description="Learn React from beginner to advanced."
          />

          <CourseCard
            title="Java Programming"
            description="Complete Java programming course."
          />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🎓 OCMS
        </Link>

        <div>
          <Link className="btn btn-light me-2" to="/admin">
            Admin
          </Link>
          <Link className="btn btn-warning" to="/student">
            Student
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
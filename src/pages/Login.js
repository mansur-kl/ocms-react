import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple role-based navigation (temporary logic)
    const role = document.getElementById("role").value;

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/student");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login Page</h2>

      <input className="form-control mb-3" type="email" placeholder="Email" />
      <input className="form-control mb-3" type="password" placeholder="Password" />

      <select id="role" className="form-control mb-3">
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
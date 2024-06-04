// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  console.log("isAuthenticated login", isAuthenticated);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      if (isAuthenticated) {
        console.log("isAuthenticated in If", isAuthenticated);
        navigate("/admin");
      } else {
        console.log("Authentication failed or state not yet updated.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="form-inline">
            <div className="form-group mb-2">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

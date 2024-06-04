import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Welcome to our site</h2>
      <button
        onClick={() => navigate("/login")}
        className="btn btn-primary accent-inherit-50"
      >
        Go To Login Page
      </button>
    </>
  );
};

export default Home;

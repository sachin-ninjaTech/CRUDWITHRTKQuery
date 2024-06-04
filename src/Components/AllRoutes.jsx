import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Login from "./Login";
import ProtectedRoute from "./ProRoutes";
import Admin from "./Admin";
import SuperAdmin from "./SuperAdmin";
import PageNotFound from "./PageNotFound";
import { useAuth } from "../Contexts/AuthContext";
const AllRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12"></div>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFound />}></Route>
              {isAuthenticated ? (
                <>
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <Admin />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/superadmin"
                    element={
                      <ProtectedRoute>
                        <SuperAdmin />
                      </ProtectedRoute>
                    }
                  />
                </>
              ) : (
                ""
              )}{" "}
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default AllRoutes;

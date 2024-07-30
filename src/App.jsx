import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import JobListings from "./pages/JobListings";
import JobDetails from "./components/JobDetails";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Register from "./pages/Register";
import ApplicationForm from "./pages/ApplicationForm";
import Admin from "./pages/Admin";

function AppContent() {
  const location = useLocation();
  const hideNavbarAndFooterRoutes = [
    "/login",
    "/signup",
    "/register",
    "/admin",
  ];
  const shouldHideNavbarAndFooter = hideNavbarAndFooterRoutes.includes(
    location.pathname
  );

  return (
    <div>
      {!shouldHideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/Job-details" element={<JobDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {!shouldHideNavbarAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

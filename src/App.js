// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/home";
import AboutUs from "./screens/aboutUs";
import PreviousVersions from "./screens/previousVersions";
import VirtualSchool from "./screens/vitualSchool";
import ToolBox from "./screens/toolBox";
import Contact from "./screens/contact";

const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about_us">About</Link>
      <Link to="/previous_versions">About</Link>
      <Link to="/virtual_school">About</Link>
      <Link to="/tool_box">About</Link>
      <Link to="/contact">About</Link>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/previous_versions" element={<PreviousVersions />} />
        <Route path="/virtual_school" element={<VirtualSchool />} />
        <Route path="/tool_box" element={<ToolBox />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

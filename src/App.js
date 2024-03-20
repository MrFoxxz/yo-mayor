// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import AboutUs from "./screens/aboutUs";
import PreviousVersions from "./screens/previousVersions";
import VirtualSchool from "./screens/vitualSchool";
import ToolBox from "./screens/toolBox";
import Contact from "./screens/contact";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/previous_versions" element={<PreviousVersions />} />
        <Route path="/virtual_school" element={<VirtualSchool />} />
        <Route path="/tool_box" element={<ToolBox />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

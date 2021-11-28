import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Living from "./components/charts/Living";
import Consum from "./components/charts/Consum";
import Metro from "./components/charts/Metro";
import Homechart from "./components/charts/Homechart";
import Culture from "./components/charts/Culture";
import Apex from "./components/charts/Apex";
import Metroanalysis from "./components/analysis/Metroanalysis";



const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Routes>
        <Route exact path="/living" element={<Living />} />
        <Route exact path="/metro" element={<Metro />} />
        <Route exact path="/" element={<Homechart />} />
        <Route exact path="/culture" element={<Culture />} />
        <Route exact path="/consum" element={<Consum />} />
        <Route exact path="/apex" element={<Apex />} />
        <Route exact path="/metro/analysis" element={<Metroanalysis />} />
      </Routes>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;

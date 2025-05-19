import "./index.css";
import { Routes, Route } from "react-router";
import Menu from "./pages/menu";
import Navig from "./components/nav";
import Homie from "./pages/homepage";
import ContactUs from "./pages/contact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navig />
      <Routes>
        <Route path="/" element={<Homie />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;

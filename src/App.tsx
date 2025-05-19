import "./index.css";
import Navig from "./components/nav";
import Homie from "./pages/homepage";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navig />
      <Homie />

      <h1 className="text-6xl underline bg-red-50">Vite + React + Ts</h1>
    </div>
  );
}

export default App;

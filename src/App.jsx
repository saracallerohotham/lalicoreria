import "./output.css";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Slider from "./components/Slider";
import Destacados from "./components/Destacados";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Slider />
      <Destacados />
    </>
  );
}

export default App;

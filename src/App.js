import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Galleria from "./components/Galleria";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <Section />
        <Galleria />
        <Footer />
      </header>
    </div>
  );
}

export default App;

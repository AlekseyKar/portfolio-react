import "./css/main.css";

import Navbar from "./components/navbar/nav";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

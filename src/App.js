import "./css/main.css";

import Navbar from "./components/navbar/Nav";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

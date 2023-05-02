import "./css/main.css";

import Navbar from "./components/navbar/nav";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

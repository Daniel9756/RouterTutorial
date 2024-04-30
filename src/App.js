import logo from "./logo.svg";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Body />} />

        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
//Import React-router-dom version > 6
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Course from "./pages/Course";
import Courses from "./components/Courses";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" exact element={<Course />} />
          <Route path=":courseId" element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

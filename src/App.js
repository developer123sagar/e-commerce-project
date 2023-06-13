import "./global.css";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Details, Home, Login, Register } from "pages";
import { Navbar } from "components";

function App() {
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:category/:id" element={<Details />} />
      </Routes> */}
      <Contact/>
    </>
  );
}

export default App;

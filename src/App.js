import "./global.css";
import { Route, Routes } from "react-router-dom";
import { About, Cart, Contact, Details, Home, Login, Register } from "pages";
import { Navbar } from "components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:category/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;

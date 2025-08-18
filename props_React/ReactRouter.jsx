import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function ReactRouter() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Routes>
        <Route path="/" element={<h2>home</h2>} />
        <Route path="/about" element={<h2>about</h2>} />
        <Route path="/contact" element={<h2>contact</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

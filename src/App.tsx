import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Symbols from "./components/Symbols";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/gallery" replace />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="features" element={<Features />} />
        <Route path="symbols" element={<Symbols />} />
      </Route>
    </Routes>
  );
};

export default App;

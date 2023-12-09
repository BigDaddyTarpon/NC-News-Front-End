import Header from "./components/Header";
import Navbar from "./components/Navbar";

// import ReactDom from 'react-dom/client';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

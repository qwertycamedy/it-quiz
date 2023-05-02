import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Tests from "./pages/Tests";
import Test from "./pages/Test";


function App() {
  return (
    <div className="App min-h-screen bg-slate-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tests" element={<Tests />} />
          <Route path="test/:id" element={<Test />} />
        </Routes>
    </div>
  );
}

export default App;

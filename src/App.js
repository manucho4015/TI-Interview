import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EditProfessional from "./pages/EditProfessional";

// redux setup
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditProfessional />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

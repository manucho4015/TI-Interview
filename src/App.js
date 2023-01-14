import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EditProfessional from "./pages/EditProfessional";
import Modal from "./components/Modal";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, getProfessionals } from "./features/home/homeSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { professionalsArray } = useSelector((store) => store.home);
  const { submitted } = useSelector((store) => store.form);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [professionalsArray]);

  useEffect(() => {
    dispatch(getProfessionals());
  }, [submitted]);

  return (
    <main className="App">
      {isOpen && <Modal />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditProfessional />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

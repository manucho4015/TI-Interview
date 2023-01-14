import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

// redux
import { useDispatch, useSelector } from "react-redux";

// action creators
import { closeModal, changeFileName } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const { fileName } = useSelector((store) => store.modal);
  const { professionalsArray } = useSelector((store) => store.home);

  const exportPdf = () => {
    let exportArray = [];
    professionalsArray.map((professional) => {
      let tempArray = [];
      tempArray.push(professional.name);
      tempArray.push(professional.email);
      tempArray.push(professional.occupation);
      tempArray.push(professional.bio);
      exportArray.push(tempArray);
      return null;
    });
    const doc = new jsPDF();
    autoTable(doc, {
      head: [["Name", "Email", "Occupation", "Bio"]],
      body: exportArray,
    });
    doc.save(`${fileName}.pdf`);
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Input preferred filename</h4>
        <input
          type="text"
          name="file name"
          id=""
          placeholder="File Name..."
          className="file-input"
          value={fileName}
          onChange={(e) => dispatch(changeFileName(e.target.value))}
        />
        <div className="btn-container">
          <div
            className="btn confirm-btn"
            onClick={() => {
              exportPdf();
              dispatch(closeModal());
            }}
          >
            export
          </div>
          <div
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

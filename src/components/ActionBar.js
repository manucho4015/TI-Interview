import React from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// action creators
import {
  changeName,
  changeProfession,
  searchName,
  searchProfession,
} from "../features/home/homeSlice";
import { openModal } from "../features/modal/modalSlice";

const ActionBar = () => {
  const dispatch = useDispatch();
  const { name, profession } = useSelector((store) => store.home);

  const handleChangeName = (e) => {
    dispatch(changeName(e.target.value));
    dispatch(searchName());
  };
  const handleChangeProfession = (e) => {
    dispatch(changeProfession(e.target.value));
    dispatch(searchProfession());
  };
  return (
    <section className="actions">
      <input
        className="search-name"
        type="text"
        name="Name"
        placeholder="Search By Name"
        value={name}
        onChange={handleChangeName}
      />
      <input
        className="search-occupation"
        type="text"
        name="Name"
        placeholder="Search By Occupation"
        value={profession}
        onChange={handleChangeProfession}
      />
      <button className="export-pdf" onClick={() => dispatch(openModal())}>
        Export to PDF
      </button>
    </section>
  );
};

export default ActionBar;

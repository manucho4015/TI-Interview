import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";

// action creators
import {
  filterProfessional,
  editName,
  editEmail,
  editBio,
  editOccupation,
  editProfessional,
} from "../features/form/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { professional, submitted } = useSelector((store) => store.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProfessional("edit"));
  };

  useEffect(() => {
    dispatch(filterProfessional());
  }, []);
  return (
    <div className="form">
      {submitted && <Navigate to="/" />}
      <form className="edit-form" onSubmit={handleSubmit}>
        <h1>Edit Professional</h1>
        <input
          className="input name"
          type="text"
          name="name"
          placeholder="Name..."
          value={professional.name}
          onChange={(e) => dispatch(editName(e.target.value))}
        />
        <input
          className="input email"
          type="text"
          name="email"
          placeholder="Email..."
          value={professional.email}
          onChange={(e) => dispatch(editEmail(e.target.value))}
        />
        <input
          className="input occupation"
          type="text"
          name="occupation"
          placeholder="Occupation..."
          value={professional.occupation}
          onChange={(e) => dispatch(editOccupation(e.target.value))}
        />
        <textarea
          className="bio"
          rows={4}
          cols={50}
          name="bio"
          placeholder="Bio..."
          value={professional.bio}
          onChange={(e) => dispatch(editBio(e.target.value))}
        />
        <button className="button-submit">Submit</button>
      </form>
      <div className="form-side"></div>
    </div>
  );
};

export default Form;

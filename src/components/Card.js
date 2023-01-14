import React from "react";
import { Link } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";

// material UI
import EditIcon from "@mui/icons-material/Edit";

// action creators
import { setId } from "../features/form/formSlice";

const Card = ({ name, occupation, bio, _id }) => {
  const dispatch = useDispatch();
  return (
    <article className="card">
      <h3>{name}</h3>
      <h4>{occupation}</h4>
      <Link
        to={`/edit/${_id}`}
        className="edit-link"
        onClick={() => dispatch(setId(_id))}
      >
        <EditIcon className="edit-icon" />
      </Link>
    </article>
  );
};

export default Card;

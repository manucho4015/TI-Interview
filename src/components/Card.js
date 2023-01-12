import React from "react";

import EditIcon from "@mui/icons-material/Edit";

const Card = () => {
  return (
    <article className="card">
      <h3>manucho</h3>
      <p>frontend engineer</p>
      <EditIcon className="edit-icon" />
    </article>
  );
};

export default Card;

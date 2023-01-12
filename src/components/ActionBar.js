import React from "react";

const ActionBar = () => {
  return (
    <section className="actions">
      <input
        className="search-name"
        type="text"
        name="Name"
        placeholder="Search By Name"
      />
      <input
        className="search-occupation"
        type="text"
        name="Name"
        placeholder="Search By Occupation `"
      />
      <button className="export-pdf">Export to PDF</button>
    </section>
  );
};

export default ActionBar;

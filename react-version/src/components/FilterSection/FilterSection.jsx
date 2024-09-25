import React from "react";
import "./FilterSection.css";
import { buttonsList } from "../../mocks";

const FilterSection = () => {
  return (
    <div className="filter-section">
      {buttonsList.map((btn, index) => (
        <button key={index} className={btn.active ? "active" : ""}>
          {btn.title}
        </button>
      ))}
    </div>
  );
};

export default FilterSection;

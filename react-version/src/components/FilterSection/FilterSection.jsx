import React, { useState } from "react";
import "./FilterSection.css";
import { buttonsList } from "../../mocks";

const FilterSection = ({ handleChangeCategories }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  function handleOnClick(index, title) {
    setActiveButtonIndex(index);
    handleChangeCategories(title);
  }

  return (
    <div className="filter-section">
      {buttonsList.map((btn, index) => (
        <button
          onClick={() => handleOnClick(index, btn.title)}
          key={index}
          className={index === activeButtonIndex ? "active" : ""}
        >
          {btn.title}
        </button>
      ))}
    </div>
  );
};

export default FilterSection;

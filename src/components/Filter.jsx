import React from "react";
import style from "./Filter.module.css";

const Filter = ({ setFilterCategory }) => {
  const onchangeFilter = (e) => {
    setFilterCategory(e.target.value);
  };

  return (
    <div>
      <select className={style.filter} onChange={onchangeFilter}>
        <option value="All">All notes</option>
        <option value="Worked">Worked</option>
        <option value="Family">Family</option>
        <option value="Social">Social</option>
        <option value="Study">Study</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};

export default Filter;

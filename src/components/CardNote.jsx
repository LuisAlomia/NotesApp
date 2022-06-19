import React from "react";
import { useState } from "react";
import style from "./CardNote.module.css";

const CardNote = ({
  reset,
  note,
  deleteNote,
  setObjNoteUpdate,
  setBtnNweNote,
  setChangeBtn,
}) => {
  const [btnPlus, setBtnPlus] = useState(false);
  const [complete, setComplete] = useState(false);

  const updateNote = () => {
    const obj = {
      category: note.category,
      title: note.title,
      description: note.description,
      date: note.date,
    };

    setBtnNweNote(true);
    setChangeBtn(true);
    setBtnPlus(false);
    reset(obj);
    setObjNoteUpdate(note);
  };

  const handleBtnPlus = () => {
    setBtnPlus(!btnPlus);
  };

  const taskClompete = () => {
    setComplete(true);
    setBtnPlus(false);
  };

  /* Renderizado condicional */
  const cardBorderColorWorked =
    note?.category === "Worked" && style.cardBorderColorWorked;
  const cardBorderColorFamily =
    note?.category === "Family" && style.cardBorderColorFamily;
  const cardBorderColorSocial =
    note?.category === "Social" && style.cardBorderColorSocial;
  const cardBorderColorStudy =
    note?.category === "Study" && style.cardBorderColorStudy;
  const cardBorderColorOthers =
    note?.category === "Others" && style.cardBorderColorOthers;
  const task = complete === true && style.taskComplete;

  const iconWorked = note.category === "Worked" && "work";
  const bgIconWorked = note.category === "Worked" && style.iconWorked;

  const iconFamily = note.category === "Family" && "Family_Restroom";
  const bgIconFamily = note.category === "Family" && style.iconFamily;

  const iconSocial = note.category === "Social" && "Diversity_3";
  const bgIconSocial = note.category === "Social" && style.iconSocial;

  const iconStudy = note.category === "Study" && "School";
  const bgIconStudy = note.category === "Study" && style.iconStudy;

  const iconOthers = note.category === "Others" && "Accessibility_New";
  const bgIconOthers = note.category === "Others" && style.iconOthers;

  return (
    <figure
      className={`${style.card} ${cardBorderColorWorked} ${cardBorderColorFamily} ${cardBorderColorSocial} ${cardBorderColorStudy} ${cardBorderColorOthers} ${task} `}
    >
      <div>
        <div className={style.groupCategory}>
          <h4 className={`${style.cardCategory} `}> {note.category}</h4>
          <span
            className={`${style.categoryIcon} ${bgIconSocial} ${bgIconWorked} ${bgIconFamily} ${bgIconStudy} ${bgIconOthers} material-symbols-outlined`}
          >
            {iconFamily} {iconSocial} {iconWorked} {iconStudy} {iconOthers}
          </span>
        </div>
        <h2 className={style.cardTitle}>{note.title}</h2>
        <p className={style.cardDescription}>{note.description}</p>
      </div>
      <div className={style.cardFooter}>
        <p>{note.date}</p>
        {btnPlus && (
          <div
            className={`${style.packBtnCard} animate__animated animate__rotateInDownRight animate__delay-0.3s`}
          >
            <button
              className={style.btnCard}
              onClick={() => deleteNote(note._id)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
            <button className={style.btnCard} onClick={updateNote}>
              <span className="material-symbols-outlined">Update</span>
            </button>
            <button className={style.btnCard} onClick={taskClompete}>
              <span className="material-symbols-outlined">Add_Task</span>
            </button>
          </div>
        )}
        <button className={style.btnCard} onClick={handleBtnPlus}>
          <span className="material-symbols-outlined">Add</span>
        </button>
      </div>
    </figure>
  );
};

export default CardNote;

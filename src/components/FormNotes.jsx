import React from "react";
import style from "./FormNotes.module.css";

const FormNotes = ({
  register,
  handleSubmit,
  reset,
  createNewNote,
  updateNote,
  objNoteUpdate,
  changeBtn,
  defaultForm,
  setBtnNweNote,
}) => {
  const submit = (data) => {
    if (objNoteUpdate !== undefined) {
      updateNote(objNoteUpdate._id, data);
      reset(defaultForm);
    } else {
      createNewNote(data);
    }
    reset(defaultForm);
    setBtnNweNote(false);
  };

  return (
    <form
      className={`${style.form} animate__animated animate__fadeIn animate__delay-0.3s`}
      onSubmit={handleSubmit(submit)}
    >
      <div className={style.groupLabel}>
        <label htmlFor="category">category</label>
        <select
          id="category"
          {...register("category", {
            required: true,
          })}
        >
          <option value="Worked">Worked</option>
          <option value="Family">Family</option>
          <option value="Social">Social</option>
          <option value="Study">Study</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className={style.groupLabel}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register("title", {
            required: true,
          })}
        />
      </div>
      <div className={style.groupLabel}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          cols="28"
          rows="7"
          {...register("description", {
            required: true,
          })}
        ></textarea>
      </div>
      <div className={style.groupLabel}>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" {...register("date")} />
      </div>
      <button className={style.btnForm}>
        {changeBtn === false ? "Send" : "Ubdate"}
      </button>
    </form>
  );
};

export default FormNotes;

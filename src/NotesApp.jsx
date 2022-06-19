import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CardNote from "./components/CardNote";
import FormNotes from "./components/FormNotes";
import Filter from "./components/Filter";
import style from "./NotesApp.module.css";

const URL = "https://restapi-notes.herokuapp.com/api/notes";

const NotesApp = () => {
  const [notes, setNotes] = useState();
  const [objNoteUpdate, setObjNoteUpdate] = useState();
  const [btnNweNote, setBtnNweNote] = useState(false);
  const [changeBtn, setChangeBtn] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All");
  const { register, handleSubmit, reset } = useForm();

  const defaultForm = {
    category: "",
    title: "",
    description: "",
    date: "",
  };

  //GET
  const getAllNotes = () => {
    axios
      .get(URL)
      .then(({ data }) => setNotes(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  //CREATE
  const createNewNote = (newNote) => {
    axios
      .post(URL, newNote)
      .then(() => getAllNotes())
      .catch((err) => console.log(err));
  };

  //DELETE
  const deleteNote = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => getAllNotes())
      .catch((err) => console.log(err));
  };

  //UPDATE
  const updateNote = (id, data) => {
    axios
      .put(`${URL}/${id}`, data)
      .then(() => {
        setObjNoteUpdate();
        getAllNotes();
      })
      .catch((err) => console.log(err));
  };

  //HIDDEN BTN NEWNOTE
  const hiddenBtnNewNote = () => {
    setBtnNweNote(!btnNweNote);
    reset(defaultForm);
    setChangeBtn(false);
  };

  return (
    <>
      <div className={`${style.circleBlur} ${style.circleUne}`}></div>
      <div className={`${style.circleBlur} ${style.circleTwe}`}></div>
      <div className={`${style.circleBlur} ${style.circleThree}`}></div>
      <div className={`${style.circleBlur} ${style.circleFour}`}></div>
      <div className={`${style.circleBlur} ${style.circleFive}`}></div>
      <div className={`${style.circleBlur} ${style.circleSix}`}></div>
      <p className={style.placeholderTitle}>notes app</p>
      <p className={style.logo}>F&#40;AV</p>
      <nav className={style.navBar}>
        <button className={style.btnNewNote} onClick={hiddenBtnNewNote}>
          <span className="material-symbols-outlined">add</span>
        </button>
        <Filter setFilterCategory={setFilterCategory} />
      </nav>

      {btnNweNote && (
        <div className={style.contentForm}>
          <FormNotes
            register={register}
            handleSubmit={handleSubmit}
            reset={reset}
            createNewNote={createNewNote}
            updateNote={updateNote}
            setBtnNweNote={setBtnNweNote}
            defaultForm={defaultForm}
            objNoteUpdate={objNoteUpdate}
            btnNweNote={btnNweNote}
            changeBtn={changeBtn}
          />
        </div>
      )}

      <div
        className={`${style.contentCard} animate__animated animate__fadeIn animate__delay-1s`}
      >
        {notes !== undefined && filterCategory !== "All"
          ? notes
              ?.filter((note) => note.category === filterCategory)
              .map((note) => (
                <CardNote
                  key={note._id}
                  note={note}
                  deleteNote={deleteNote}
                  setObjNoteUpdate={setObjNoteUpdate}
                  reset={reset}
                  setBtnNweNote={setBtnNweNote}
                  setChangeBtn={setChangeBtn}
                />
              ))
          : notes?.map((note) => (
              <CardNote
                key={note._id}
                note={note}
                deleteNote={deleteNote}
                setObjNoteUpdate={setObjNoteUpdate}
                reset={reset}
                setBtnNweNote={setBtnNweNote}
                setChangeBtn={setChangeBtn}
              />
            ))}
      </div>
    </>
  );
};

export default NotesApp;

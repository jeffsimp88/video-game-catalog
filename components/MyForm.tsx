"use client";

import { VideoGame, VideoGameConsole } from "@/types/video-game";
import { ChangeEvent, FormEvent, useState } from "react";
import TextInputField from "./form-fields/TextInputField";
import styles from "./Form.module.css";
import SelectInputField from "./form-fields/SelectInputField";
import { videoGameConsoles } from "@/mockData/consoles";

const defaultConsole: VideoGameConsole = {
  abbreviation: "",
  controllerPorts: undefined,
  manufacturer: "",
  name: "",
  releaseYear: "",
};

const defaultForm: VideoGame = {
  title: "",
  genre: [],
  numOfPlayers: undefined,
  publisher: "",
  year: "",
  console: defaultConsole,
};

export default function MyForm() {
  const [formState, setFormState] = useState(defaultForm);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Current Form State: ", formState);
    handleReset();
  };

  const handleReset = () => {
    setFormState(defaultForm);
  };

  return (
    <>
      <h1>Add Game to your collection.</h1>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <TextInputField
          title="Title"
          name="title"
          handleFormChange={handleFormChange}
        />
        <TextInputField
          title="Year"
          name="year"
          handleFormChange={handleFormChange}
        />
        <SelectInputField
          title="Console"
          name="console"
          options={videoGameConsoles}
          handleChange={handleFormChange}
        />
        <TextInputField
          title="Publisher"
          name="publisher"
          handleFormChange={handleFormChange}
        />
        <TextInputField
          title="# of Players"
          name="numOfPlayers"
          handleFormChange={handleFormChange}
        />
        <TextInputField
          title="Genre"
          name="genre"
          handleFormChange={handleFormChange}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
        <button type="reset" onClick={handleReset} className={styles.button}>
          Reset
        </button>
      </form>
    </>
  );
}

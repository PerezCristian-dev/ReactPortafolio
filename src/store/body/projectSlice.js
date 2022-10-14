import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "projects",
  initialState: {
    title: "Hangman",
    description: "Hangman is a game created using HTML5, CSS3 and JS",
    videoURL: "",
    active: null,
  },
  reducers: {
    setActive: (state, action) => {},
  },
});

export const { setActive } = projectSlice.actions;

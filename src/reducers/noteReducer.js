// import { createSlice } from "@reduxjs/toolkit";

// const noteSlice = createSlice({
//   name: "notes",
//   initialState: [],
//   reducers: {
//     creatNote(state, action) {
//       const content = action.payload;
//       return [...state, content];
//     },
//     toggleImportanceOf(state, action) {
//       const id = action.payload;
//       const noteToChange = state.find((n) => n.id === id);
//       const changedNote = {
//         ...noteToChange,
//         important: !noteToChange.important,
//       };
//       return state.map((note) => (note.id !== id ? note : changedNote));
//     },
//     appendNote(state, action) {
//       state.push(action.payload);
//       return [...state, action.payload];
//     },

//     setNotes(state, action) {
//       return action.payload;
//     },
//   },
// });

// export const { creatNote, toggleImportanceOf, setNotes, appendNote } =
//   noteSlice.actions;
// export default noteSlice.reducer;

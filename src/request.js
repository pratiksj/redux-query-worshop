import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

export const getNotes = () => axios.get(baseUrl).then((res) => res.data); //arrow function

export const createNote = (newNote) => {
  return axios.post(baseUrl, newNote).then((res) => {
    return res.data;
  });
};

// export const updateNote = (updatedNote) => {
//   axios
//     .put(`${baseUrl}/${updatedNote.id}`, updatedNote)
//     .then((res) => res.data);
// };

export const updateNote = (updatedNote) => {
  return axios.put(`${baseUrl}/${updatedNote.id}`, updatedNote).then((res) => {
    return res.data;
  });
};

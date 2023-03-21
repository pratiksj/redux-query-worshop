import { useQuery, useMutation, useQueryClient } from "react-query"; //hook come from react query library
//import axios from "axios";
import { getNotes, createNote, updateNote } from "./request";

const App = () => {
  const queryClient = useQueryClient();
  const newNoteMutation = useMutation(createNote, {
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData("notes");
      queryClient.setQueryData("notes", notes.concat(newNote));
    },
  });
  const updateNoteMutation = useMutation(updateNote, {
    // onSuccess: () => {
    //   queryClient.invalidateQueries("notes");
    // },
    onSuccess: (updatedNote) => {
      console.log(updatedNote, "this inside updateMutation");
      const notes = queryClient.getQueryData("notes");
      console.log(notes, "notes inside the onsucesses");
      // const findNote = notes.map((note) => {
      //   if (note.id === updatedNote.id) {
      //     return updatedNote;
      //   } else {
      //     return note;
      //   }
      // });
      queryClient.setQueryData(
        "notes",
        notes.map((note) => {
          return note.id === updatedNote.id ? updatedNote : note;
        })
      );
    },
  });
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    newNoteMutation.mutate({ content, important: true });
  };

  const result = useQuery("notes", getNotes);

  if (result.isLoading) {
    return <h1>Loading Data....</h1>;
  }
  const notes = result.data;

  const toggleImportance = (note) => {
    updateNoteMutation.mutate({ ...note, important: !note.important });
  };

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? "important" : ""}</strong>
        </li>
      ))}
    </div>
  );
};

export default App;

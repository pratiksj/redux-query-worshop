import { useQuery, useMutation, useQueryClient } from "react-query";
//import axios from "axios";
import { getNotes, createNote } from "./request";

const App = () => {
  const queryClient = useQueryClient();
  const newNoteMutation = useMutation(createNote, {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    newNoteMutation.mutate({ content, important: true });
  };

  const result = useQuery("notes", getNotes);
  console.log(result);

  if (result.isLoading) {
    return <div>Loading Data....</div>;
  }
  const notes = result.data;

  const toggleImportance = (note) => {
    console.log("toggle importance of", note.id);
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

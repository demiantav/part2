import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('');

  const addNote = (event) => {
    event.preventDefault();
    createNote({
      content: newNote,
      important: true,
    });

    setNewNote('');
  };

  return (
    <div>
      <h2>Create a new note</h2>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={({ target }) => setNewNote(target.value)} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default NoteForm;

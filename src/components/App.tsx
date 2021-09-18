import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


export type NoteContent = {
  title: string;
  content: string;
}
export type NoteAddHandler={
  onAdd: (value: NoteContent) => void;
}
export type NoteDeleteHandler={
  onDelete: (id: number) => void;
}


function App() {
  const [notes, setNotes] = useState<NoteContent[]>([]);

  function addNote(newNote:NoteContent) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id:number) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

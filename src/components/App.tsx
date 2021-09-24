import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {NoteContent} from './Types';

import {AppBar, Box} from '@mui/material';

function App() {

    let initNotes = [];
    const initNotesJSON = window.localStorage.getItem('notes');
    if (initNotesJSON) {
        initNotes = JSON.parse(initNotesJSON).notes;
    }

    const [notes, setNotes] = useState<NoteContent[]>(initNotes);

    function addNote(newNote: NoteContent) {
        setNotes(prevNotes => {
            const result = [...prevNotes, newNote];
            window.localStorage.setItem('notes', JSON.stringify({notes: result}));
            return result;
        });

    }

    function deleteNote(id: number) {
        setNotes(prevNotes => {
            const result = prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
            window.localStorage.setItem('notes', JSON.stringify({notes: result}));
            return result;
        });

    }

    return (
        <React.Fragment>
            <AppBar position={'static'}>
                <Header/>
            </AppBar>
            <Box sx={{display: 'flex', flexDirection: 'column', maxHeight: 'calc( 100vh - 104px)', padding: '0 10px'}}>
                <CreateArea onAdd={addNote}/>
                <Box sx={{
                    overflow: 'auto', width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
                }}>
                    {
                        notes.map((noteItem, index) => {
                            return (
                                <Note
                                    key={index}
                                    id={index}
                                    title={noteItem.title}
                                    content={noteItem.content}
                                    onDelete={deleteNote}
                                />
                            );
                        })
                    }
                </Box>
            </Box>
            <Footer/>
        </React.Fragment>
    );
}

export default App;

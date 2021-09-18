import React, {ChangeEvent, FormEvent, useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import {Fab, Zoom} from "@material-ui/core";
import {NoteAddHandler} from './App';

const CreateArea = (props: NoteAddHandler) => {
    const [isActive, setIsActive] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    function submitNote(event: FormEvent) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        setIsActive(false);
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                <input style={{display: isActive ? "block" : "none"}}
                       name="title"
                       onChange={handleChange}
                       value={note.title}
                       placeholder="Title"
                />
                <textarea
                    onClick={() => {
                        setIsActive(true);
                    }}
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isActive ? 3 : 1}
                />
                <Zoom in={isActive}>
                    <Fab onClick={submitNote}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
};

export default CreateArea;

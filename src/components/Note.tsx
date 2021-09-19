import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {NoteContent, NoteDeleteHandler} from './Types';

type NoteType = {
    id: number;
} & NoteContent & NoteDeleteHandler;

const Note = (props: NoteType) => {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon/>
            </button>
        </div>
    );
};

export default Note;

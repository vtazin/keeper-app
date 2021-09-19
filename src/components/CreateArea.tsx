import React, {ChangeEvent, FormEvent, useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import {Box, Fab, makeStyles, TextareaAutosize, TextField, Zoom} from "@material-ui/core";
import {NoteAddHandler} from './Types';


const useStyles = makeStyles({
    root: {
        position: 'relative',
        maxWidth: '480px',
        margin: '30px auto 20px auto',
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '7px',
        boxShadow: '0 1px 5px rgb(138, 137, 137)'
    },
    textArea: {
        width: '100%',
        border: 'none',
        padding: '4px',
        outline: 'none',
        fontSize: '1.2em',
        fontFamily: 'inherit',
        resize: 'none'
    },
    submitButton: {
        position: 'absolute',
        right: '18px',
        bottom: '-18px',
        background: '#f5ba13',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
        outline: 'none'
    }

});


const CreateArea = (props: NoteAddHandler) => {
    const [isActive, setIsActive] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function titleChange(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                title: value,
            };
        });
    }

    function textChange(event: ChangeEvent<HTMLTextAreaElement>) {
        const {value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                content: value,
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

    const classes = useStyles();

    return (
        <Box className={classes.root} onClick={() => {
            setIsActive(true);
        }}
        >
            <TextField style={{display: isActive ? "block" : "none"}}
                       onChange={titleChange}
                       value={note.title}
                       placeholder="Title"
            />
            <TextareaAutosize
                className={classes.textArea}
                onChange={textChange}
                value={note.content}
                placeholder="Take a note..."
                minRows={isActive ? 3 : 1}
            />
            <Zoom in={isActive}>
                <Fab className={classes.submitButton} onClick={submitNote}>
                    <AddIcon/>
                </Fab>
            </Zoom>
        </Box>
    );
};

export default CreateArea;

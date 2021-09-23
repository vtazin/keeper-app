import React, {ChangeEvent, FormEvent, useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import {NoteAddHandler} from './Types';
import {Box, Fab, TextareaAutosize, TextField, Zoom} from '@mui/material';

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

    // const classes = useStyles();

    return (
        <Box sx={{
            flexShrink: 1, position: 'relative',
            zIndex: 2,
            maxWidth: '300px',
            margin: '30px auto',
            bgcolor: '#fff',
            padding: '15px',
            borderRadius: '7px',
            boxShadow: '0 1px 5px rgb(138, 137, 137)'
        }}
        >
            {isActive &&
            <TextField sx={{
                width: '100%',
                padding: '4px',
                fontSize: '1.2em',
                fontFamily: 'inherit',
                resize: 'none',
            }}
                       onChange={titleChange}
                       value={note.title}
                       placeholder="Title"
            />
            }
            <TextareaAutosize

                style={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    padding: '4px',
                    fontSize: '1.2em',
                    fontFamily: 'inherit',
                    resize: 'none',
                }}
                onClick={() => {
                    setIsActive(true);
                }}
                onChange={textChange}
                value={note.content}
                placeholder="Take a note..."
                minRows={isActive ? 3 : 1}
            />

            <Zoom in={isActive}>
                <Fab sx={{
                    position: 'absolute',
                    right: '18px',
                    bottom: '-18px',
                    bgcolor: '#f5ba13',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                    outline: 'none'

                }} onClick={submitNote}>
                    <AddIcon/>
                </Fab>
            </Zoom>
        </Box>
    );
};

export default CreateArea;

import React from "react";
import {NoteContent, NoteDeleteHandler} from './Types';
import {Button, Card, CardActions, CardContent, CardHeader, ListItem} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


// .note {


type NoteType = {
    id: number;
} & NoteContent & NoteDeleteHandler;

const Note = (props: NoteType) => {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <Card sx={{
            borderRadius: '7px',
            boxShadow: '0 2px 5px #ccc',
            padding: '10px',
            width: '240px',
            margin: '16px',
            float: 'left'
        }}>
            <CardContent sx={{
                '& h1': {
                    fontSize: '1.1em',
                    mb: '6px'
                },
                '& p': {
                    fontSize: '1.1em',
                    mb: '10px'
                }
            }}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </CardContent>
            <CardActions>
                <Button size={'medium'} variant={'text'} sx={{
                    color: '#f5ba13',
                }} onClick={handleClick}>
                    <DeleteIcon/>
                </Button>
            </CardActions>
        </Card>
    );
};

export default Note;

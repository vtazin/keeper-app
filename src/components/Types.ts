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

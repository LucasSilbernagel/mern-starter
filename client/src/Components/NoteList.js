import React from 'react'
import { Grid } from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import NoteContent from './NoteContent'

const NoteList = (props) => {
  const {
    notes,
    deleteNote,
    editNote,
    editingID,
    saveNote,
    cancelEdit,
    handleNoteTextChange,
    inputError,
    inputErrorText,
    noteBeingEdited,
  } = props

  /** Display notes if there are any saved */
  if (notes.length > 0) {
    if (notes.length > 3) {
      return (
        <Grid
          container
          item
          lg={8}
          md={10}
          sx={{
            margin: '0 auto',
          }}
        >
          <Masonry spacing={2} columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
            {notes.map((note) => {
              return (
                <NoteContent
                  key={note._id}
                  note={note}
                  notes={notes}
                  editingID={editingID}
                  handleNoteTextChange={handleNoteTextChange}
                  inputError={inputError}
                  inputErrorText={inputErrorText}
                  saveNote={saveNote}
                  noteBeingEdited={noteBeingEdited}
                  cancelEdit={cancelEdit}
                  deleteNote={deleteNote}
                  editNote={editNote}
                />
              )
            })}
          </Masonry>
        </Grid>
      )
    } else {
      return (
        <Grid
          container
          item
          lg={8}
          sm={10}
          xs={12}
          sx={{
            margin: '0 auto',
          }}
        >
          <Grid container item spacing={2}>
            {notes.map((note) => {
              return (
                <NoteContent
                  key={note._id}
                  note={note}
                  notes={notes}
                  editingID={editingID}
                  handleNoteTextChange={handleNoteTextChange}
                  inputError={inputError}
                  inputErrorText={inputErrorText}
                  saveNote={saveNote}
                  noteBeingEdited={noteBeingEdited}
                  cancelEdit={cancelEdit}
                  deleteNote={deleteNote}
                  editNote={editNote}
                />
              )
            })}
          </Grid>
        </Grid>
      )
    }
  } else return null
}

export default NoteList

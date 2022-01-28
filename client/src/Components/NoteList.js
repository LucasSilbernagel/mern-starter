import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Masonry from '@mui/lab/Masonry'
import NoteContent from './NoteContent'

const useStyles = makeStyles(() => ({
  noteContainer: {
    margin: '0 auto',
  },
}))

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

  const classes = useStyles()

  /** Display notes if there are any saved */
  if (notes.length > 0) {
    if (notes.length > 3) {
      return (
        <Grid container item lg={8} md={10} className={classes.noteContainer}>
          <Masonry
            spacing={2}
            columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
            className={classes.masonry}
          >
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
          className={classes.noteContainer}
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

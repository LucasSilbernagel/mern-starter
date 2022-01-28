import React from 'react'
import { Grid } from '@material-ui/core'
import NoteFormLogical from '../../Components/NoteForm/NoteFormLogical'
import NoteList from '../../Components/NoteList'

const NoteViewPresentational = (props) => {
  const {
    getNotes,
    notes,
    deleteNote,
    editNote,
    editingID,
    saveNote,
    cancelEdit,
    handleNoteTextChange,
    inputError,
    setInputError,
    inputErrorText,
    setInputErrorText,
    newNote,
    setNewNote,
    noteBeingEdited,
  } = props

  return (
    <Grid container>
      <Grid item container lg={12} justifyContent="center">
        <NoteFormLogical
          getNotes={getNotes}
          inputError={inputError}
          setInputError={setInputError}
          inputErrorText={inputErrorText}
          setInputErrorText={setInputErrorText}
          editingID={editingID}
          newNote={newNote}
          setNewNote={setNewNote}
        />
      </Grid>
      <Grid item container>
        <NoteList
          notes={notes}
          deleteNote={deleteNote}
          editNote={editNote}
          editingID={editingID}
          saveNote={saveNote}
          cancelEdit={cancelEdit}
          handleNoteTextChange={handleNoteTextChange}
          inputError={inputError}
          inputErrorText={inputErrorText}
          noteBeingEdited={noteBeingEdited}
        />
      </Grid>
    </Grid>
  )
}

export default NoteViewPresentational

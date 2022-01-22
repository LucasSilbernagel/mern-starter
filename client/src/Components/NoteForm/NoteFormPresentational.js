import React from 'react'
import { TextField, Button, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  form: {
    padding: '40px 0',
  },
  input: {
    width: '400px',
  },
}))

const NoteFormPresentational = (props) => {
  const {
    saveNewNote,
    handleChange,
    newNote,
    inputError,
    inputErrorText,
    editingID,
  } = props

  const classes = useStyles()

  return (
    <form onSubmit={saveNewNote} className={classes.form}>
      <Paper elevation={3}>
        <TextField
          className={classes.input}
          color="secondary"
          multiline
          label="Take a note..."
          size="small"
          onChange={handleChange}
          value={newNote.text}
          variant="outlined"
          error={editingID.length ? false : inputError}
          helperText={editingID.length ? '' : inputErrorText}
          disabled={editingID.length > 0}
        />
      </Paper>
      <Button
        type="submit"
        disabled={editingID.length > 0 || !newNote.text.length > 0}
      >
        Add note
      </Button>
    </form>
  )
}

export default NoteFormPresentational

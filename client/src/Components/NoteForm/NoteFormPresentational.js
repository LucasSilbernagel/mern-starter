import React from 'react'
import { TextField, Button, makeStyles, Paper, Grid } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  form: {
    padding: '40px 0',
  },
  input: {
    width: '400px',
  },
  inputOverflow: {
    width: '400px',
    maxHeight: '100px',
    overflowY: 'auto',
  },
  hiddenButton: {
    height: '3.3em',
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
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Paper elevation={2}>
            <TextField
              className={
                newNote.text.length > 100
                  ? classes.inputOverflow
                  : classes.input
              }
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
        </Grid>
        {newNote.text.length > 0 ? (
          <Grid item>
            <Button
              type="submit"
              disabled={editingID.length > 0 || !newNote.text.length > 0}
              variant="contained"
              color="secondary"
              elevation={3}
            >
              Save note
            </Button>
          </Grid>
        ) : (
          <Grid item className={classes.hiddenButton}></Grid>
        )}
      </Grid>
    </form>
  )
}

export default NoteFormPresentational

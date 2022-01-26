import React from 'react'
import {
  Grid,
  Typography,
  Button,
  TextField,
  Paper,
  makeStyles,
} from '@material-ui/core'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import { disableNonEditingButtons } from '../LogicHelpers/LogicHelpers'

const useStyles = makeStyles(() => ({
  note: {
    maxWidth: '250px',
    width: '250px',
  },
  noteText: {
    maxHeight: '180px',
    padding: '1em 1.6em 1em 0.9em',
    overflow: 'hidden',
  },
  noteEditText: {
    maxHeight: '212px',
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  inputText: {
    lineHeight: 1.5,
  },
  buttonContainer: {
    padding: '10px 0px',
  },
}))

const NoteContent = (props) => {
  const {
    note,
    notes,
    editingID,
    handleNoteTextChange,
    inputError,
    inputErrorText,
    saveNote,
    noteBeingEdited,
    cancelEdit,
    deleteNote,
    editNote,
  } = props

  const classes = useStyles()

  /** If a note is being edited, display an editing text field, a save button, and a cancel button. */
  if (note._id === editingID) {
    return (
      <Grid item key={note._id} className={classes.note}>
        <Paper elevation={2}>
          <Grid item>
            <TextField
              color="secondary"
              multiline
              variant="outlined"
              defaultValue={note.text}
              onChange={handleNoteTextChange}
              error={inputError}
              helperText={inputErrorText}
              className={classes.noteEditText}
              InputProps={{
                classes: {
                  input: classes.inputText,
                },
              }}
            />
            <Grid className={classes.buttonContainer}>
              <Button
                onClick={saveNote}
                disabled={!noteBeingEdited.text.length > 0}
              >
                <SaveIcon />
              </Button>
              <Button onClick={cancelEdit}>
                <CancelIcon />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
    /** For notes that are not being edited, display the note along with a delete button and an edit button. */
  } else {
    return (
      <Grid item key={note._id} className={classes.note}>
        <Paper elevation={2}>
          <Grid item>
            <Typography className={classes.noteText}>{note.text}</Typography>
            <Grid className={classes.buttonContainer}>
              <Button
                onClick={() => deleteNote(note._id)}
                disabled={disableNonEditingButtons(notes, note, editingID)}
              >
                <DeleteIcon />
              </Button>
              <Button
                onClick={() => editNote(note._id)}
                disabled={disableNonEditingButtons(notes, note, editingID)}
              >
                <EditIcon />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}

export default NoteContent

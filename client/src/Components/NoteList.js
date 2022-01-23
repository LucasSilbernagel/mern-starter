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
  noteContainer: {
    margin: '0 auto',
  },
  note: {
    maxWidth: '250px',
    width: '250px',
    // width: '100%',
    marginBottom: '1em',
    marginRight: '1em',
    height: 'unset',
  },
  noteText: {
    maxHeight: '200px',
    // overflowX: 'hidden',
    // overflowY: 'auto',
    padding: '1em',
    // whiteSpace: 'nowrap',
    overflow: 'hidden',
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
    return (
      <Grid
        container
        item
        // justifyContent="space-between"
        lg={11}
        className={classes.noteContainer}
      >
        {notes.map((note) => {
          /** If a note is being edited, display an editing text field, a save button, and a cancel button. */
          if (note._id === editingID) {
            return (
              <Grid item key={note._id}>
                <TextField
                  color="secondary"
                  multiline
                  variant="outlined"
                  defaultValue={note.text}
                  onChange={handleNoteTextChange}
                  error={inputError}
                  helperText={inputErrorText}
                />
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
            )
            /** For notes that are not being edited, display the note along with a delete button and an edit button. */
          } else {
            return (
              <Grid
                item
                // lg={4}
                // justifyContent="space-around"
                className={classes.note}
              >
                <Paper elevation={2}>
                  <Grid item key={note._id}>
                    <Typography className={classes.noteText}>
                      {note.text}
                    </Typography>
                    <Button
                      onClick={() => deleteNote(note._id)}
                      disabled={disableNonEditingButtons(
                        notes,
                        note,
                        editingID
                      )}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      onClick={() => editNote(note._id)}
                      disabled={disableNonEditingButtons(
                        notes,
                        note,
                        editingID
                      )}
                    >
                      <EditIcon />
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
            )
          }
        })}
      </Grid>
    )
    /** Display a message if there are no notes to display. */
  } else {
    return (
      <Grid item container direction="column">
        <Grid item>
          <Typography>No notes left</Typography>
        </Grid>
      </Grid>
    )
  }
}

export default NoteList
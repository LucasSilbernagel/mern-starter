import React from 'react'
import { TextField, Button, Paper, Grid } from '@mui/material'

const NoteFormPresentational = (props) => {
  const {
    saveNewNote,
    handleChange,
    newNote,
    inputError,
    inputErrorText,
    editingID,
  } = props

  return (
    <form
      onSubmit={saveNewNote}
      style={{
        padding: '40px 0',
      }}
    >
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Paper elevation={2}>
            <TextField
              sx={
                newNote.text.length > 100
                  ? {
                      width: '400px',
                      maxHeight: '100px',
                      overflowY: 'auto',
                    }
                  : {
                      width: {
                        xs: '250px',
                        sm: '400px',
                      },
                    }
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
          <Grid
            item
            sx={{
              height: '3.3em',
            }}
          ></Grid>
        )}
      </Grid>
    </form>
  )
}

export default NoteFormPresentational

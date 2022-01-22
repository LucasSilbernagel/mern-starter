import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import NoteViewLogical from './Views/NoteView/NoteViewLogical'
import { Grid } from '@material-ui/core'
import { lightTheme } from './themes'

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Grid container item lg={12}>
        <NoteViewLogical />
      </Grid>
    </ThemeProvider>
  )
}

export default App

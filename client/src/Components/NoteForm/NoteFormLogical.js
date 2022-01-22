import React from 'react'
import axios from 'axios'
import NoteFormPresentational from './NoteFormPresentational'

const NoteFormLogical = (props) => {
  const {
    getNotes,
    inputError,
    inputErrorText,
    setInputError,
    setInputErrorText,
    editingID,
    newNote,
    setNewNote,
  } = props

  /** Keep track of the new note text as the user types in the text field */
  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setInputError(false)
      setInputErrorText('')
    }
    setNewNote({
      text: e.target.value,
    })
  }

  /** Save the new note to the database */
  const saveNewNote = (e) => {
    e.preventDefault()
    if (newNote.text.length > 0) {
      axios
        .post('/api/notes', newNote)
        .then((res) => {
          if (res.data) {
            getNotes()
            setNewNote({ text: '' })
          }
        })
        .catch((err) => console.log(err))
    } else {
      setInputError(true)
      setInputErrorText('Input field required')
    }
  }

  return (
    <NoteFormPresentational
      saveNewNote={saveNewNote}
      handleChange={handleChange}
      newNote={newNote}
      inputError={inputError}
      inputErrorText={inputErrorText}
      editingID={editingID}
    />
  )
}

export default NoteFormLogical

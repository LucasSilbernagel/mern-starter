import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NoteViewPresentational from './NoteViewPresentational'

const NoteViewLogical = () => {
  /** Saved notes */
  const [notes, setNotes] = useState([])
  /** The ID of the note that is being edited */
  const [editingID, setEditingID] = useState('')
  /** The note that is being edited */
  const [noteBeingEdited, setNoteBeingEdited] = useState({})
  /** Boolean to determine whether an input has an error */
  const [inputError, setInputError] = useState(false)
  /** Error message to display for an input */
  const [inputErrorText, setInputErrorText] = useState('')
  /** A new note */
  const [newNote, setNewNote] = useState({ text: '' })

  /** Returns all saved notes */
  const getNotes = () => {
    axios
      .get('/api/notes')
      .then((res) => {
        if (res.data) {
          setNotes(res.data)
        }
      })
      .catch((err) => console.log(err))
  }

  /** Display all saved notes when the page first loads */
  useEffect(() => {
    getNotes()
  }, [])

  /** Delete a note with a specific ID */
  const deleteNote = (id) => {
    axios
      .delete(`/api/notes/${id}`)
      .then((res) => {
        if (res.data) {
          getNotes()
        }
      })
      .catch((err) => console.log(err))
  }

  /** Edit a note with a specific ID */
  const editNote = (id) => {
    setEditingID(id)
    setNoteBeingEdited(notes.find((note) => note._id === id))
    setInputError(false)
    setInputErrorText('')
  }

  /** Change the text of a note as the user types into the editing field */
  const handleNoteTextChange = (e) => {
    setNoteBeingEdited((prevNote) => {
      const newNote = { ...prevNote }
      newNote.text = e.target.value
      return newNote
    })
  }

  /** Cancel editing a note */
  const cancelEdit = () => {
    setEditingID('')
    setNoteBeingEdited({})
    setInputError(false)
    setInputErrorText('')
  }

  /** Save an edited note to the database */
  const saveNote = () => {
    if (noteBeingEdited.text.length > 0) {
      axios
        .put(`/api/notes/${noteBeingEdited._id}`, noteBeingEdited)
        .then((res) => {
          if (res.data) {
            getNotes()
          }
        })
        .then(() => {
          setEditingID('')
          setNoteBeingEdited({})
          setNewNote({ text: '' })
        })
        .catch((err) => console.log(err))
    } else {
      setInputError(true)
      setInputErrorText('Missing text')
    }
  }

  return (
    <NoteViewPresentational
      getNotes={getNotes}
      notes={notes}
      deleteNote={deleteNote}
      editNote={editNote}
      editingID={editingID}
      saveNote={saveNote}
      cancelEdit={cancelEdit}
      handleNoteTextChange={handleNoteTextChange}
      inputError={inputError}
      setInputError={setInputError}
      inputErrorText={inputErrorText}
      setInputErrorText={setInputErrorText}
      newNote={newNote}
      setNewNote={setNewNote}
      noteBeingEdited={noteBeingEdited}
    />
  )
}

export default NoteViewLogical

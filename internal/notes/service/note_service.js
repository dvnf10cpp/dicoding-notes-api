const { nanoid } = require('nanoid')

class NoteService {
    constructor (noteRepo) {
        this.noteRepo = noteRepo
    }

    getAllNotes () {
        return this.noteRepo.getAllNotes()
    }

    getNoteByID (id) {
        return this.noteRepo.getNoteByID(id)
    }

    addNote (note) {
        note.id = nanoid(16)
        note.createdAt = new Date().toISOString()
        note.updatedAt = note.createdAt

        return this.noteRepo.addNote(note)
    }

    updateNote (id, note) {
        return this.noteRepo.updateNote(id, note)
    }

    deleteNote (id) {
        return this.noteRepo.deleteNote(id)
    }
}

module.exports = NoteService

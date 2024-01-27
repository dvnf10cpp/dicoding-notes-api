const NoteRepository = require('../internal/notes/repository/note_repository')
const NoteService = require('../internal/notes/service/note_service')
const NoteHandler = require('../internal/notes/handler/note_handler')

const noteRepo = new NoteRepository()
const noteSvc = new NoteService(noteRepo)
const noteCtr = new NoteHandler(noteSvc)

module.exports = {
    noteCtr
}

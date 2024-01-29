class NoteHandler {
    constructor (noteService) {
        this.noteService = noteService
    }

    fetchAll () {
        return (req, h) => {
            const resp = this.noteService.getAllNotes()

            const hresp = h.response(resp)

            return hresp
        }
    }

    fetchByID () {
        return (req, h) => {
            const { id } = req.params

            const resp = this.noteService.getNoteByID(id)

            const hresp = h.response(resp)

            if (resp.status === 'success') {
                hresp.code(200)
            } else {
                hresp.code(404)
            }
            return hresp
        }
    }

    addNote () {
        return (req, h) => {
            const { title, tags, body } = req.payload

            const note = {
                title,
                tags,
                body
            }

            const resp = this.noteService.addNote(note)

            const hresp = h.response(resp)

            if (resp.status === 'fail') {
                hresp.code(500)
            } else {
                hresp.code(201)
            }

            return hresp
        }
    }

    updateNote () {
        return (req, h) => {
            const { id } = req.params
            const { title, tags, body } = req.payload

            const updatedNote = {
                title,
                tags,
                body
            }

            const resp = this.noteService.updateNote(id, updatedNote)

            const hresp = h.response(resp)

            if (resp.status === 'success') {
                hresp.code(200)
            } else {
                hresp.code(500)
            }

            return hresp
        }
    }

    removeNote () {
        return (req, h) => {

        }
    }
}

module.exports = NoteHandler

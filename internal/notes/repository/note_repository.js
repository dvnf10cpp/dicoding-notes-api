class NoteRepository {
    static dbPath = './db/notes.json'

    constructor () {
        this.notes = []
    }

    getAllNotes () {
        return {
            status: 'success',
            data: {
                notes: this.notes
            }
        }
    }

    getNoteByID (id) {
        const note = this.notes.find(item => item.id === id)

        if (!note) {
            return {
                status: 'fail',
                message: 'catatan tidak ditemukan'
            }
        }

        return {
            status: 'success',
            data: {
                note
            }
        }
    }

    addNote (note) {
        this.notes.push(note)

        const success = this.notes.filter(item => item.id === note.id).length > 0

        if (!success) {
            return {
                status: 'fail',
                message: 'catatan gagal ditambahkan'
            }
        }

        return {
            status: 'success',
            message: 'catatan berhasil ditambahkan',
            data: {
                noteId: note.id
            }
        }
    }

    updateNote (id, note) {
        const index = this.notes.findIndex(item => item.id === id)

        if (index === -1) {
            return {
                status: 'fail',
                message: 'gagal memperbarui catatan. id catatan tidak ditemukan'
            }
        }

        this.notes[index] = { ...this.notes[index], ...note }

        return {
            status: 'success',
            message: 'catatan berhasil diperbarui'
        }
    }

    deleteNote (id) {
        const filtered = this.notes.filter(item => item.id !== id)

        if (filtered.length === this.notes.length) {
            return {
                status: 'fail',
                message: 'catatan gagal dihapus. id catatan tidak ditemukan'
            }
        }

        this.notes = filtered

        return {
            status: 'success',
            message: 'catatan berhasil dihapus'
        }
    }
}

module.exports = NoteRepository

const { noteCtr } = require('../bootstrap/layers')

const methods = ['GET', 'POST', 'PUT', 'DELETE']

const noteRoutes = [
    {
        method: methods[0],
        path: '/notes',
        handler: noteCtr.fetchAll()
    },
    {
        method: methods[0],
        path: '/notes/{id}',
        handler: noteCtr.fetchByID()
    },
    {
        method: methods[1],
        path: '/notes',
        handler: noteCtr.addNote()
    },
    {
        method: methods[2],
        path: '/notes/{id}',
        handler: noteCtr.updateNote()
    },
    {
        method: methods[3],
        path: '/notes/{id}',
        handler: noteCtr.removeNote()
    }
]

const routes = [...noteRoutes]

module.exports = routes

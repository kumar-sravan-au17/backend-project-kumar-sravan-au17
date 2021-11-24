const { Router } = require('express')
const note_model = require('../models/notes_model')
// const morgan = require('morgan')
const noteRoutes = Router()

// noteRoutes.use(morgan('dev'))


noteRoutes.get('/notes', async (req, res) => {
    try {
        const data = await note_model.find()
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

noteRoutes.post('/notes', async (req, res) => {
    try {
        const data = req.body
        const inserted = await note_model.create(data)
        res.send(inserted)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})


noteRoutes.get('/notes/:id', async (req, res) => {
    try {
        const data = await note_model.findById(req.params.id)
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

noteRoutes.delete('/notes/:id', async (req, res) => {
    try {
        const data = await note_model.findByIdAndDelete(req.params.id)
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

noteRoutes.patch('/notes/:id', async (req, res) => {
    try {
        const data = await note_model.findByIdAndUpdate(req.params.id)
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

module.exports = noteRoutes
const { Router } = require('express')
const user_model = require('../models/user_model')
const userRoutes = Router()

// const morgan = require('morgan')

// userRoutes.use(morgan('dev'))

userRoutes.get('/user', async (req, res) => {
    try {
        const data = await user_model.find()
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

userRoutes.post('/user', async (req, res) => {
    try {
        const data = req.body
        const inserted = await user_model.create(data)
        res.send(inserted)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})


userRoutes.get('/user/:id', async (req, res) => {
    try {
        const data = await user_model.findById(req.params.id)
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

userRoutes.delete('/user/:id', async (req, res) => {
    try {
        const data = await user_model.findByIdAndDelete(req.params.id)
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

userRoutes.patch('/user/:id', async (req, res) => {
    try {
        const data = await user_model.findByIdAndUpdate(req.params.id)
        res.send(data)
    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }
})

module.exports = userRoutes
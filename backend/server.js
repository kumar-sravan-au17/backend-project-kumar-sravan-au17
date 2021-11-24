require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const noteRoutesObj = require('./routes/note_router')
const userRoutes = require('./routes/user_router')
const morgan = require('morgan')

const PORT = process.env.PORT || 3000
const db_url = process.env.DB_URL
const app = express()
app.use(morgan('dev'))

app.use(express.urlencoded({extended: true}))

app.use('/api', noteRoutesObj)
app.use('/api', userRoutes)

async function dbConnect() {
    await mongoose.connect(db_url)
}
dbConnect()

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
})

const express = require('express')
const cors = require('cors')
require('dotenv').config({})
const app = express()
app.use(cors())

app.use('/api', require('./routes/weatherRoute'))


app.listen(`${process.env.PORT}`, ()=>{
    console.log(`running ${process.env.PORT}`)
})
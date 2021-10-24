const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

require('dotenv').config({})
const app = express()
app.use(cors())
app.use(express.static('public'))
const limiter = rateLimit({
    windowMs : 10 * 60 * 1000,
    max : 100
})

app.use(limiter)
app.set('trust proxy',1)

app.use('/api', require('./routes/weatherRoute'))


app.listen(`${process.env.PORT}`, ()=>{
    console.log(`running ${process.env.PORT}`)
})
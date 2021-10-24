const express = require('express')
const router = express.Router()
var needle = require('needle');
const url = require('url')
const apicache = require('apicache')


const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

//init cache

let cache = apicache.middleware

router.get('/',cache('2 minutes'), async(req, res) =>{
    try {
        console.log(url.parse(req.url, true).query)
        const params = new URLSearchParams({
            APPID: API_KEY_VALUE,
            ...url.parse(req.url, true).query
        })
        console.log(`${API_BASE_URL}?${params}`)
        const apiRes = await needle('get', `${API_BASE_URL}?${params}`)
        const data = apiRes.body
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message : error.message})
    }
    
})

module.exports = router
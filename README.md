We will use Node.js & Express to create a server in order to hide public API keys, add rate limiting and caching

## const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs : 10 * 60 * 1000,
    max : 100
})

app.use(limiter) // API call limit
app.set('trust proxy',1)

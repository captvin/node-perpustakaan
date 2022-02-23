const express = require('express')
const homeRouter = require('./routers/home') 
const authRouter = require('./routers/auth')

const app = express()
app.use(express.json())

app.use('/', homeRouter)
app.use('/', authRouter)

app.listen(3000, function () {
    console.log('aplikasi berjalan pada port 3000')
})
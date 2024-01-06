import express from 'express'
import modules from '@/routers.js'

const app = express()
app.use('/v1/', modules)
app.listen(8080)

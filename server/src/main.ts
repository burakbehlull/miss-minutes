import express, { Application, Request, Response } from 'express'
const app : Application = express()
import 'dotenv/config'
const { PORT } = process.env

import { HomeRoute } from './routers/index.js'

app.use(HomeRoute)

app.listen(PORT, ()=> console.log(`Server ${PORT} portunda başlatıldı.`))
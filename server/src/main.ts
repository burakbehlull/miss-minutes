import express, { Application, Request, Response } from 'express'
import 'dotenv/config'

const app : Application = express()
const { PORT } = process.env

app.get('/', (req:Request,res: Response)=>{
    res.send('Merhaba Miss Minutes!')
})

app.listen(PORT, ()=> console.log(`Server ${PORT} portunda başlatıldı.`))
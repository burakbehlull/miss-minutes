import express from 'express'
const router = express.Router()

import { HomePage } from '../controllers/HomeController.js'

router.route('/').get(HomePage)

export default router
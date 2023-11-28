import express from 'express'
const router = express.Router()

import {Register} from '../controllers/UserControl.js'

router.route('/sign-up').post(Register)

export default router
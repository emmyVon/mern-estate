import express from 'express'
const router = express.Router()

import {Google, Login, Register} from '../controllers/UserControl.js'

router.post('/sign-up', Register);
router.post('/sign-in', Login);
router.post('/google',Google)

export default router